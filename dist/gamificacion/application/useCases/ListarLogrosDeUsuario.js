"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarLogrosDeUsuario = void 0;
const UsuarioId_1 = require("../../domain/valueObjects/UsuarioId");
class ListarLogrosDeUsuario {
    constructor(usuarioLogroRepo) {
        this.usuarioLogroRepo = usuarioLogroRepo;
    }
    async execute(idUsuario) {
        const usuarioIdVO = UsuarioId_1.UsuarioId.create(idUsuario);
        const usuarioLogros = await this.usuarioLogroRepo.findByUsuario(usuarioIdVO);
        // Por ahora retornamos la información básica
        // En una implementación completa, aquí se cargarían los datos del logro
        return usuarioLogros.map(ul => ({
            idUsuario: ul.idUsuario.getValue(),
            idLogro: ul.idLogro.getValue(),
            fechaObtenido: ul.fechaObtenido,
            logro: undefined // Se cargaría desde el repositorio de logros
        }));
    }
}
exports.ListarLogrosDeUsuario = ListarLogrosDeUsuario;
//# sourceMappingURL=ListarLogrosDeUsuario.js.map