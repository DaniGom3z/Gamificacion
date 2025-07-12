"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesbloquearLogro = void 0;
const UsuarioAggregate_1 = require("../../domain/aggregates/UsuarioAggregate");
const UsuarioId_1 = require("../../domain/valueObjects/UsuarioId");
const LogroId_1 = require("../../domain/valueObjects/LogroId");
const GamificacionService_1 = require("../../domain/services/GamificacionService");
class DesbloquearLogro {
    constructor(logroRepo, usuarioLogroRepo) {
        this.logroRepo = logroRepo;
        this.usuarioLogroRepo = usuarioLogroRepo;
    }
    async execute(usuarioId, logroId) {
        const usuarioIdVO = UsuarioId_1.UsuarioId.create(usuarioId);
        const logroIdVO = LogroId_1.LogroId.create(logroId);
        // Verificar que el logro existe
        const logro = await this.logroRepo.findById(logroIdVO);
        if (!logro) {
            throw new Error(`El logro con id ${logroId} no existe`);
        }
        // Obtener o crear el aggregate del usuario
        let usuarioAggregate = await this.usuarioLogroRepo.findUsuarioAggregate(usuarioIdVO);
        if (!usuarioAggregate) {
            usuarioAggregate = UsuarioAggregate_1.UsuarioAggregate.create(usuarioIdVO);
        }
        // Verificar reglas del negocio
        if (!GamificacionService_1.GamificacionService.esLogroElegible(logro.tipo)) {
            throw new Error(`El logro tipo ${logro.tipo} no es elegible para ser otorgado`);
        }
        // Desbloquear el logro en el aggregate
        usuarioAggregate.desbloquearLogro(logroIdVO, logro.puntosOtorgados);
        // Guardar el aggregate
        await this.usuarioLogroRepo.saveUsuarioAggregate(usuarioAggregate);
        // Obtener eventos de dominio
        const domainEvents = [...usuarioAggregate.domainEvents];
        usuarioAggregate.clearDomainEvents();
        return {
            success: true,
            puntosOtorgados: logro.puntosOtorgados.getValue(),
            puntosTotales: usuarioAggregate.puntos.getValue(),
            domainEvents
        };
    }
}
exports.DesbloquearLogro = DesbloquearLogro;
//# sourceMappingURL=DesbloquearLogro.js.map