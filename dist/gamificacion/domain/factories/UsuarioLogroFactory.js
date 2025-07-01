"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioLogroFactory = void 0;
const UsuarioLogro_1 = require("../entities/UsuarioLogro");
class UsuarioLogroFactory {
    static crearNuevo(idUsuario, idLogro) {
        return new UsuarioLogro_1.UsuarioLogro(idUsuario, idLogro, new Date());
    }
    static reconstruir(idUsuario, idLogro, fechaObtenido) {
        return new UsuarioLogro_1.UsuarioLogro(idUsuario, idLogro, fechaObtenido);
    }
}
exports.UsuarioLogroFactory = UsuarioLogroFactory;
