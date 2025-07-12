import { UsuarioId } from '../valueObjects/UsuarioId';
import { Puntos } from '../valueObjects/Puntos';
import { LogroId } from '../valueObjects/LogroId';
import { UsuarioLogro } from '../entities/UsuarioLogro';
import { DomainEvent } from '../events/DomainEvent';
export declare class UsuarioAggregate {
    private readonly _id;
    private _puntos;
    private readonly _logrosObtenidos;
    private readonly _domainEvents;
    constructor(_id: UsuarioId, _puntos: Puntos, _logrosObtenidos?: UsuarioLogro[]);
    static create(id: UsuarioId): UsuarioAggregate;
    static reconstitute(id: UsuarioId, puntos: Puntos, logrosObtenidos: UsuarioLogro[]): UsuarioAggregate;
    get id(): UsuarioId;
    get puntos(): Puntos;
    get logrosObtenidos(): readonly UsuarioLogro[];
    get domainEvents(): readonly DomainEvent[];
    clearDomainEvents(): void;
    tieneLogro(logroId: LogroId): boolean;
    desbloquearLogro(logroId: LogroId, puntosLogro: Puntos): void;
    obtenerPuntosTotales(): Puntos;
    obtenerCantidadLogros(): number;
    obtenerLogrosPorTipo(_tipo: string): UsuarioLogro[];
}
//# sourceMappingURL=UsuarioAggregate.d.ts.map