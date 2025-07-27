"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioLogroFactory = void 0;
const UsuarioLogro_1 = require("../entities/UsuarioLogro");
class UsuarioLogroFactory {
    static crearNuevo(idUsuario, idLogro, idRango = 0) {
        return UsuarioLogro_1.UsuarioLogro.create(idUsuario, idLogro, idRango, new Date());
    }
    static reconstruir(idUsuario, idLogro, idRango, fechaObtenido) {
        return UsuarioLogro_1.UsuarioLogro.create(idUsuario, idLogro, idRango, fechaObtenido);
    }
}
exports.UsuarioLogroFactory = UsuarioLogroFactory;
//# sourceMappingURL=UsuarioLogroFactory.js.map