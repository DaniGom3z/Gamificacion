"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesbloquearLogro = void 0;
const UsuarioAggregate_1 = require("../../domain/aggregates/UsuarioAggregate");
const UsuarioId_1 = require("../../domain/valueObjects/UsuarioId");
const LogroId_1 = require("../../domain/valueObjects/LogroId");
const GamificacionService_1 = require("../../domain/services/GamificacionService");
class DesbloquearLogro {
    constructor(logroRepo, usuarioLogroRepo, rangoRepository) {
        this.logroRepo = logroRepo;
        this.usuarioLogroRepo = usuarioLogroRepo;
        this.rangoRepository = rangoRepository;
    }
    async execute(usuarioId, logroId) {
        const usuarioIdVO = UsuarioId_1.UsuarioId.create(usuarioId);
        const logroIdVO = LogroId_1.LogroId.create(logroId);
        // 1. Verificar que el logro existe
        const logro = await this.logroRepo.findById(logroIdVO);
        if (!logro) {
            throw new Error(`El logro con id ${logroId} no existe`);
        }
        // 2. Obtener o crear aggregate del usuario
        let usuarioAggregate = await this.usuarioLogroRepo.findUsuarioAggregate(usuarioIdVO);
        if (!usuarioAggregate) {
            usuarioAggregate = UsuarioAggregate_1.UsuarioAggregate.create(usuarioIdVO);
        }
        // 3. Verificar elegibilidad del logro
        if (!GamificacionService_1.GamificacionService.esLogroElegible(logro.tipo)) {
            throw new Error(`El logro tipo ${logro.tipo} no es elegible para ser otorgado`);
        }
        // 4. Calcular puntos totales actualizados (antes de sumar en el aggregate)
        const puntosTotalesActuales = usuarioAggregate.puntos.getValue();
        const nuevosPuntosTotales = puntosTotalesActuales + logro.puntosOtorgados.getValue();
        // 5. Aquí debes obtener el rango según los puntos totales actualizados
        // (Para esto necesitas tener rangoRepository disponible en la clase)
        const rango = await this.rangoRepository.obtenerRangoPorPuntos(nuevosPuntosTotales);
        if (!rango || rango.id <= 0) {
            throw new Error('No se encontró un rango válido para los puntos totales');
        }
        // 6. Llamar a desbloquearLogro pasando también el idRango
        usuarioAggregate.desbloquearLogro(logroIdVO, logro.puntosOtorgados, // Aquí debería ser tipo Puntos, asegúrate
        rango.id // Pasa el idRango correcto
        );
        // 7. Guardar cambios
        await this.usuarioLogroRepo.saveUsuarioAggregate(usuarioAggregate);
        // 8. Obtener eventos y limpiar
        const domainEvents = [...usuarioAggregate.domainEvents];
        usuarioAggregate.clearDomainEvents();
        // 9. Retornar resultado
        return {
            success: true,
            puntosOtorgados: logro.puntosOtorgados.getValue(),
            puntosTotales: usuarioAggregate.puntos.getValue(),
            domainEvents,
        };
    }
}
exports.DesbloquearLogro = DesbloquearLogro;
//# sourceMappingURL=DesbloquearLogro.js.map