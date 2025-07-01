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
    desbloquear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idUsuario = Number(req.body.idUsuario);
                const idLogro = Number(req.body.idLogro);
                if (isNaN(idUsuario) || isNaN(idLogro)) {
                    res.status(400).json({ error: 'idUsuario y idLogro deben ser numéricos' });
                    return;
                }
                yield this.desbloquearLogro.execute(idUsuario, idLogro);
                res.status(201).json({ message: 'Logro desbloqueado con éxito' });
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    listarPorUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idUsuario = Number(req.params.idUsuario);
                if (isNaN(idUsuario)) {
                    res.status(400).json({ error: 'idUsuario debe ser numérico' });
                    return;
                }
                const logros = yield this.listarLogrosDeUsuario.execute(idUsuario);
                res.status(200).json(logros);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al obtener logros del usuario' });
            }
        });
    }
}
exports.GamificacionController = GamificacionController;
