"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioLogro = void 0;
const UsuarioId_1 = require("../valueObjects/UsuarioId");
const LogroId_1 = require("../valueObjects/LogroId");
class UsuarioLogro {
    constructor(idUsuario, idLogro, fechaObtenido) {
        this.idUsuario = idUsuario;
        this.idLogro = idLogro;
        this.fechaObtenido = fechaObtenido;
    }
    static create(idUsuario, idLogro, fechaObtenido = new Date()) {
        return new UsuarioLogro(UsuarioId_1.UsuarioId.create(idUsuario), LogroId_1.LogroId.create(idLogro), fechaObtenido);
    }
    esDelUsuario(usuarioId) {
        return this.idUsuario.equals(usuarioId);
    }
    esDelLogro(logroId) {
        return this.idLogro.equals(logroId);
    }
}
exports.UsuarioLogro = UsuarioLogro;
//# sourceMappingURL=UsuarioLogro.js.map