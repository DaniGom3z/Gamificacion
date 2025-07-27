import { PrismaClient } from '@prisma/client';
import amqp from 'amqplib';
import { GamificacionApplicationService } from '../../application/services/GamificacionApplicationService';
import { DesbloquearLogroDto } from '../../application/dtos/DesbloquearLogroDto';
import { DesbloquearLogro } from '../../application/useCases/DesbloquearLogro';
import { ListarLogrosDeUsuario } from '../../application/useCases/ListarLogrosDeUsuario';
import { UsuarioLogroPrismaRepository } from '../repositories/UsuarioLogroPrismaRepository';
import { LogroPrismaRepository } from '../repositories/LogroPrismaRepository';
import { RangoRepository } from '../repositories/RangoRepository'; 

// ✅ Crear instancia de PrismaClient
const prisma = new PrismaClient();

// Instancias de repositorios con Prisma
const logroRepository = new LogroPrismaRepository(prisma);
const usuarioLogroRepository = new UsuarioLogroPrismaRepository(prisma);
const rangoRepository = new RangoRepository(prisma);
// Casos de uso
const desbloquearLogroUseCase = new DesbloquearLogro(logroRepository, usuarioLogroRepository,rangoRepository);
const listarLogrosDeUsuario = new ListarLogrosDeUsuario(usuarioLogroRepository);

// Servicio de aplicación
const gamificacionService = new GamificacionApplicationService(
  desbloquearLogroUseCase,
  listarLogrosDeUsuario,
  rangoRepository
);

// Función principal
export async function iniciarConsumidorLogros() {
  const conn = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
  const channel = await conn.createChannel();
  const queue = 'logroDesbloqueado';

  await channel.assertQueue(queue, { durable: true });

  channel.consume(queue, async (msg) => {
    if (msg) {
      try {
        const contenido = JSON.parse(msg.content.toString());
        console.log('🎯 Logro recibido:', contenido);

        const dto: DesbloquearLogroDto = {
          idUsuario: Number(contenido.idUsuario),
          logroId: Number(contenido.logroId)
        };

        const resultado = await gamificacionService.desbloquearLogro(dto);

        if (resultado.success) {
          console.log('✅ Logro guardado en base de datos.');
        } else {
          console.error('⚠️ Error al guardar logro:', resultado.message);
        }

        channel.ack(msg);
      } catch (error) {
        console.error('❌ Error al procesar el mensaje de logro:', error);
        channel.nack(msg, false, false);
      }
    }
  });

  console.log('👂 Consumidor de logros escuchando...');
}
