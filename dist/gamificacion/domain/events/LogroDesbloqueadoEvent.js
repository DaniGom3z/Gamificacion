"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogroDesbloqueadoEvent = void 0;
const DomainEvent_1 = require("./DomainEvent");
class LogroDesbloqueadoEvent extends DomainEvent_1.DomainEvent {
    constructor(usuarioId, logroId, puntosOtorgados) {
        super();
        this.usuarioId = usuarioId;
        this.logroId = logroId;
        this.puntosOtorgados = puntosOtorgados;
    }
    getEventName() {
        return 'LogroDesbloqueado';
    }
}
exports.LogroDesbloqueadoEvent = LogroDesbloqueadoEvent;
//# sourceMappingURL=LogroDesbloqueadoEvent.js.map