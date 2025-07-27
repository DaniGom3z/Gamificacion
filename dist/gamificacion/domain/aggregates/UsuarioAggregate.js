"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioAggregate = void 0;
const Puntos_1 = require("../valueObjects/Puntos");
const UsuarioLogro_1 = require("../entities/UsuarioLogro");
const LogroDesbloqueadoEvent_1 = require("../events/LogroDesbloqueadoEvent");
class UsuarioAggregate {
    constructor(_id, _puntos, logrosObtenidos = []) {
        this._id = _id;
        this._puntos = _puntos;
        this._domainEvents = [];
        this._logrosObtenidos = [];
        this._logrosObtenidos = [...logrosObtenidos];
    }
    static create(id) {
        return new UsuarioAggregate(id, Puntos_1.Puntos.create(0), []);
    }
    static reconstitute(id, puntos, logrosObtenidos) {
        return new UsuarioAggregate(id, puntos, logrosObtenidos);
    }
    get id() {
        return this._id;
    }
    get puntos() {
        return this._puntos;
    }
    get logrosObtenidos() {
        return [...this._logrosObtenidos];
    }
    get domainEvents() {
        return [...this._domainEvents];
    }
    clearDomainEvents() {
        this._domainEvents.length = 0;
    }
    tieneLogro(logroId) {
        return this._logrosObtenidos.some((ul) => ul.idLogro.getValue() === logroId.getValue());
    }
    desbloquearLogro(logroId, puntosLogro, idRango) {
        if (this.tieneLogro(logroId)) {
            throw new Error(`El usuario ya tiene el logro ${logroId.getValue()}`);
        }
        const usuarioLogro = UsuarioLogro_1.UsuarioLogro.create(this._id.getValue(), logroId.getValue(), idRango, new Date());
        this._logrosObtenidos.push(usuarioLogro);
        this._puntos = this._puntos.add(puntosLogro);
        const evento = new LogroDesbloqueadoEvent_1.LogroDesbloqueadoEvent(this._id.getValue(), logroId.getValue(), puntosLogro.getValue());
        this._domainEvents.push(evento);
    }
    obtenerPuntosTotales() {
        return this._puntos;
    }
    obtenerCantidadLogros() {
        return this._logrosObtenidos.length;
    }
    obtenerLogrosPorTipo(_tipo) {
        // TODO: Implementar filtrado real por tipo si se puede acceder al tipo del logro.
        return [...this._logrosObtenidos]; // Por ahora, regresamos todos
    }
}
exports.UsuarioAggregate = UsuarioAggregate;
//# sourceMappingURL=UsuarioAggregate.js.map