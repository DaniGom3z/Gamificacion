"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciarConsumidorLogros = iniciarConsumidorLogros;
const client_1 = require("@prisma/client");
const amqplib_1 = __importDefault(require("amqplib"));
const GamificacionApplicationService_1 = require("../../application/services/GamificacionApplicationService");
const DesbloquearLogro_1 = require("../../application/useCases/DesbloquearLogro");
const ListarLogrosDeUsuario_1 = require("../../application/useCases/ListarLogrosDeUsuario");
const UsuarioLogroPrismaRepository_1 = require("../repositories/UsuarioLogroPrismaRepository");
const LogroPrismaRepository_1 = require("../repositories/LogroPrismaRepository");
const RangoRepository_1 = require("../repositories/RangoRepository");
const ListarTodosLosLogros_1 = require("../../application/useCases/ListarTodosLosLogros");
// ✅ Crear instancia de PrismaClient
const prisma = new client_1.PrismaClient();
// Instancias de repositorios con Prisma
const logroRepository = new LogroPrismaRepository_1.LogroPrismaRepository(prisma);
const usuarioLogroRepository = new UsuarioLogroPrismaRepository_1.UsuarioLogroPrismaRepository(prisma);
const rangoRepository = new RangoRepository_1.RangoRepository(prisma);
// Casos de uso
const desbloquearLogroUseCase = new DesbloquearLogro_1.DesbloquearLogro(logroRepository, usuarioLogroRepository, rangoRepository);
const listarLogrosDeUsuario = new ListarLogrosDeUsuario_1.ListarLogrosDeUsuario(usuarioLogroRepository);
const listarTodosLosLogros = new ListarTodosLosLogros_1.ListarTodosLosLogros(logroRepository);
// Servicio de aplicación
const gamificacionService = new GamificacionApplicationService_1.GamificacionApplicationService(desbloquearLogroUseCase, listarLogrosDeUsuario, rangoRepository, listarTodosLosLogros);
// Función principal
async function iniciarConsumidorLogros() {
    const conn = await amqplib_1.default.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
    const channel = await conn.createChannel();
    const queue = 'logroDesbloqueado';
    await channel.assertQueue(queue, { durable: true });
    channel.consume(queue, async (msg) => {
        if (msg) {
            try {
                const contenido = JSON.parse(msg.content.toString());
                console.log('🎯 Logro recibido:', contenido);
                const dto = {
                    idUsuario: Number(contenido.idUsuario),
                    logroId: Number(contenido.logroId)
                };
                const resultado = await gamificacionService.desbloquearLogro(dto);
                if (resultado.success) {
                    console.log('✅ Logro guardado en base de datos.');
                }
                else {
                    console.error('⚠️ Error al guardar logro:', resultado.message);
                }
                channel.ack(msg);
            }
            catch (error) {
                console.error('❌ Error al procesar el mensaje de logro:', error);
                channel.nack(msg, false, false);
            }
        }
    });
    console.log('👂 Consumidor de logros escuchando...');
}
//# sourceMappingURL=logroConsumer.js.map