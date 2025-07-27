"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificacionController = void 0;
class GamificacionController {
    constructor(gamificacionService) {
        this.gamificacionService = gamificacionService;
    }
    // POST /api/gamificacion/logros/desbloquear
    async desbloquear(req, res) {
        try {
            const idUsuario = Number(req.user?.id);
            const idLogro = Number(req.body.idLogro);
            if (!idUsuario || isNaN(idLogro)) {
                res.status(400).json({
                    success: false,
                    error: "Token sin id o idLogro inválido"
                });
                return;
            }
            const dto = {
                idUsuario: idUsuario,
                logroId: idLogro
            };
            const resultado = await this.gamificacionService.desbloquearLogro(dto);
            if (resultado.success) {
                res.status(201).json(resultado);
            }
            else {
                res.status(400).json(resultado);
            }
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
    // GET /api/gamificacion/logros
    async listarPorUsuario(req, res) {
        try {
            const idUsuario = Number(req.user?.id);
            if (!idUsuario) {
                res.status(400).json({
                    success: false,
                    error: "Token sin idUsuario"
                });
                return;
            }
            const gamificacion = await this.gamificacionService.obtenerGamificacionUsuario(idUsuario);
            res.status(200).json({
                success: true,
                data: gamificacion
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: "Error al obtener logros del usuario",
                message: error.message
            });
        }
    }
    // En GamificacionController
    async listarLogros(_, res) {
        try {
            // Aquí llamamos a un nuevo método en el servicio de aplicación
            const logros = await this.gamificacionService.listarLogros();
            res.status(200).json({
                success: true,
                data: logros,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || "Error al obtener la lista de logros",
            });
        }
    }
}
exports.GamificacionController = GamificacionController;
//# sourceMappingURL=GamificacionController.js.map