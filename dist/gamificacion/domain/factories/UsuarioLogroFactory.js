"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioLogroFactory = void 0;
const UsuarioLogro_1 = require("../entities/UsuarioLogro");
class UsuarioLogroFactory {
    static crearNuevo(idUsuario, idLogro) {
        return UsuarioLogro_1.UsuarioLogro.create(idUsuario, idLogro, new Date());
    }
    static reconstruir(idUsuario, idLogro, fechaObtenido) {
        return UsuarioLogro_1.UsuarioLogro.create(idUsuario, idLogro, fechaObtenido);
    }
}
exports.UsuarioLogroFactory = UsuarioLogroFactory;
//# sourceMappingURL=UsuarioLogroFactory.js.map