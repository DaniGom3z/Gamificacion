import { UsuarioId } from "../valueObjects/UsuarioId";
import { Puntos } from "../valueObjects/Puntos";
import { LogroId } from "../valueObjects/LogroId";
import { UsuarioLogro } from "../entities/UsuarioLogro";
import { LogroDesbloqueadoEvent } from "../events/LogroDesbloqueadoEvent";
import { DomainEvent } from "../events/DomainEvent";

export class UsuarioAggregate {
  private readonly _domainEvents: DomainEvent[] = [];
  private readonly _logrosObtenidos: UsuarioLogro[] = [];

  constructor(
    private readonly _id: UsuarioId,
    private _puntos: Puntos,
    logrosObtenidos: UsuarioLogro[] = []
  ) {
    this._logrosObtenidos = [...logrosObtenidos];
  }

  static create(id: UsuarioId): UsuarioAggregate {
    return new UsuarioAggregate(id, Puntos.create(0), []);
  }

  static reconstitute(
    id: UsuarioId,
    puntos: Puntos,
    logrosObtenidos: UsuarioLogro[]
  ): UsuarioAggregate {
    return new UsuarioAggregate(id, puntos, logrosObtenidos);
  }

  get id(): UsuarioId {
    return this._id;
  }

  get puntos(): Puntos {
    return this._puntos;
  }

  get logrosObtenidos(): readonly UsuarioLogro[] {
    return [...this._logrosObtenidos];
  }

  get domainEvents(): readonly DomainEvent[] {
    return [...this._domainEvents];
  }

  clearDomainEvents(): void {
    this._domainEvents.length = 0;
  }

  tieneLogro(logroId: LogroId): boolean {
    return this._logrosObtenidos.some(
      (ul) => ul.idLogro.getValue() === logroId.getValue()
    );
  }

  desbloquearLogro(logroId: LogroId, puntosLogro: Puntos, idRango: number): void {
    if (this.tieneLogro(logroId)) {
      throw new Error(`El usuario ya tiene el logro ${logroId.getValue()}`);
    }

    const usuarioLogro = UsuarioLogro.create(
      this._id.getValue(),
      logroId.getValue(),
      idRango,
      new Date()
    );

    this._logrosObtenidos.push(usuarioLogro);
    this._puntos = this._puntos.add(puntosLogro);

    const evento = new LogroDesbloqueadoEvent(
      this._id.getValue(),
      logroId.getValue(),
      puntosLogro.getValue()
    );
    this._domainEvents.push(evento);
  }

  obtenerPuntosTotales(): Puntos {
    return this._puntos;
  }

  obtenerCantidadLogros(): number {
    return this._logrosObtenidos.length;
  }

  obtenerLogrosPorTipo(_tipo: string): UsuarioLogro[] {
    // TODO: Implementar filtrado real por tipo si se puede acceder al tipo del logro.
    return [...this._logrosObtenidos]; // Por ahora, regresamos todos
  }
}
