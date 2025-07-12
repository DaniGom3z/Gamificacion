import { DomainEvent } from './DomainEvent';
export declare class LogroDesbloqueadoEvent extends DomainEvent {
    readonly usuarioId: number;
    readonly logroId: number;
    readonly puntosOtorgados: number;
    constructor(usuarioId: number, logroId: number, puntosOtorgados: number);
    getEventName(): string;
}
//# sourceMappingURL=LogroDesbloqueadoEvent.d.ts.map