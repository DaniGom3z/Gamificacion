"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificacionApplicationService = void 0;
class GamificacionApplicationService {
    constructor(desbloquearLogroUseCase, listarLogrosDeUsuario, rangoRepository, listarTodosLosLogros // inyecta el nuevo caso de uso
    ) {
        this.desbloquearLogroUseCase = desbloquearLogroUseCase;
        this.listarLogrosDeUsuario = listarLogrosDeUsuario;
        this.rangoRepository = rangoRepository;
        this.listarTodosLosLogros = listarTodosLosLogros;
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
        console.log('aqui andamos en aplication service');
        const rango = await this.rangoRepository.obtenerRangoPorPuntos(puntosTotales);
        console.log('Rango obtenido:', rango);
        return {
            idUsuario: usuarioId,
            puntosTotales,
            idRango: rango?.id ?? 0,
            nombreRango: rango?.nombre ?? "",
            cantidadLogros: logros.length,
            logros: logros.map((logro) => ({
                idUsuario: logro.idUsuario,
                idLogro: logro.idLogro,
                nombreLogro: logro.logro?.nombre || "", // Asegúrate que accedes aquí correctamente
                fechaObtenido: logro.fechaObtenido.toISOString(),
            })),
        };
    }
    async listarLogros() {
        return await this.listarTodosLosLogros.execute();
    }
}
exports.GamificacionApplicationService = GamificacionApplicationService;
//# sourceMappingURL=GamificacionApplicationService.js.map