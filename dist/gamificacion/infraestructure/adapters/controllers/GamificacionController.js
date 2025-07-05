"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificacionController = void 0;
class GamificacionController {
    constructor(desbloquearLogro, listarLogrosDeUsuario) {
        this.desbloquearLogro = desbloquearLogro;
        this.listarLogrosDeUsuario = listarLogrosDeUsuario;
    }
    // POST /api/gamificacion/logros/desbloquear
    desbloquear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const idUsuario = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id); // ← viene del JWT
                const idLogro = Number(req.body.idLogro); // ← solo recibimos idLogro
                if (!idUsuario || isNaN(idLogro)) {
                    res
                        .status(400)
                        .json({ error: "Token sin id o idLogro inválido" });
                    return;
                }
                yield this.desbloquearLogro.execute(idUsuario, idLogro);
                res.status(201).json({ message: "Logro desbloqueado con éxito" });
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    // GET /api/gamificacion/logros
    listarPorUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const idUsuario = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
                if (!idUsuario) {
                    res.status(400).json({ error: "Token sin idUsuario" });
                    return;
                }
                const logros = yield this.listarLogrosDeUsuario.execute(idUsuario);
                res.status(200).json(logros);
            }
            catch (error) {
                res.status(500).json({ error: "Error al obtener logros del usuario" });
            }
        });
    }
}
exports.GamificacionController = GamificacionController;
