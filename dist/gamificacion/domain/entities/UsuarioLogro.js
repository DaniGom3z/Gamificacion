"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioLogro = void 0;
const UsuarioId_1 = require("../valueObjects/UsuarioId");
const LogroId_1 = require("../valueObjects/LogroId");
const RangoId_1 = require("../valueObjects/RangoId");
class UsuarioLogro {
    constructor(idUsuario, idLogro, idRango, fechaObtenido, 
    // Propiedad opcional para datos completos del logro
    logro) {
        this.idUsuario = idUsuario;
        this.idLogro = idLogro;
        this.idRango = idRango;
        this.fechaObtenido = fechaObtenido;
        this.logro = logro;
    }
    static create(idUsuario, idLogro, idRango, fechaObtenido = new Date(), logro) {
        try {
            console.log('Creando UsuarioLogro con idRango:', idRango);
            return new UsuarioLogro(UsuarioId_1.UsuarioId.create(idUsuario), LogroId_1.LogroId.create(idLogro), RangoId_1.RangoId.create(idRango), fechaObtenido, logro // asignamos el objeto logro aquí
            );
        }
        catch (error) {
            console.error('Error en UsuarioLogro.create:', error);
            throw error; // para que el error siga propagándose
        }
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