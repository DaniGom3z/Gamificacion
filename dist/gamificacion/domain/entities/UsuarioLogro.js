"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioLogro = void 0;
class UsuarioLogro {
    constructor(idUsuario, idLogro, fechaObtenido) {
        this.idUsuario = idUsuario;
        this.idLogro = idLogro;
        this.fechaObtenido = fechaObtenido;
        if (!idUsuario || idUsuario <= 0) {
            throw new Error('El idUsuario debe ser un número válido');
        }
        if (!idLogro || idLogro <= 0) {
            throw new Error('El idLogro debe ser un número válido');
        }
    }
}
exports.UsuarioLogro = UsuarioLogro;
