"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificacionApplicationService = void 0;
class GamificacionApplicationService {
    constructor(desbloquearLogroUseCase, listarLogrosDeUsuario, rangoRepository) {
        this.desbloquearLogroUseCase = desbloquearLogroUseCase;
        this.listarLogrosDeUsuario = listarLogrosDeUsuario;
        this.rangoRepository = rangoRepository;
    }
    async desbloquearLogro(dto) {
        try {
            const resultado = await this.desbloquearLogroUseCase.execute(dto.idUsuario, dto.logroId);
            return {
                success: true,
                message: "Logro desbloqueado con éxito",
                puntosOtorgados: resultado.puntosOtorgados,
                puntosTotales: resultado.puntosTotales,
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
    async obtenerGamificacionUsuario(usuarioId) {
        const logros = await this.listarLogrosDeUsuario.execute(usuarioId);
        const puntosTotales = logros.reduce((total, logro) => {
            return total + (logro.logro?.puntosOtorgados || 0);
        }, 0);
        const rango = await this.rangoRepository.obtenerRangoPorPuntos(puntosTotales);
        console.log('Rango obtenido:', rango);
        return {
            idUsuario: usuarioId,
            puntosTotales,
            idRango: rango?.id ?? 0, // Devuelve 0 si no se encuentra rango
            cantidadLogros: logros.length,
            logros: logros.map((logro) => ({
                idUsuario: logro.idUsuario,
                idLogro: logro.idLogro,
                fechaObtenido: logro.fechaObtenido.toISOString(),
                logro: logro.logro
                    ? {
                        id: logro.logro.id,
                        nombre: logro.logro.nombre,
                        descripcion: logro.logro.descripcion,
                        puntosOtorgados: logro.logro.puntosOtorgados,
                        tipo: logro.logro.tipo,
                    }
                    : undefined,
            })),
        };
    }
}
exports.GamificacionApplicationService = GamificacionApplicationService;
//# sourceMappingURL=GamificacionApplicationService.js.map