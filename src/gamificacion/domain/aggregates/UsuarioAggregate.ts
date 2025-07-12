import { UsuarioId } from '../valueObjects/UsuarioId';
import { Puntos } from '../valueObjects/Puntos';
import { LogroId } from '../valueObjects/LogroId';
import { UsuarioLogro } from '../entities/UsuarioLogro';
import { LogroDesbloqueadoEvent } from '../events/LogroDesbloqueadoEvent';
import { DomainEvent } from '../events/DomainEvent';

export class UsuarioAggregate {
  private readonly _domainEvents: DomainEvent[] = [];
  
  constructor(
    private readonly _id: UsuarioId,
    private _puntos: Puntos,
    private readonly _logrosObtenidos: UsuarioLogro[] = []
  ) {}

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
    return this._logrosObtenidos.some(ul => ul.idLogro.getValue() === logroId.getValue());
  }

  desbloquearLogro(logroId: LogroId, puntosLogro: Puntos): void {
    if (this.tieneLogro(logroId)) {
      throw new Error(`El usuario ya tiene el logro ${logroId.getValue()}`);
    }

    // Crear el nuevo logro del usuario
    const usuarioLogro = UsuarioLogro.create(
      this._id.getValue(),
      logroId.getValue(),
      new Date()
    );

    // Añadir a la lista de logros obtenidos
    this._logrosObtenidos.push(usuarioLogro);

    // Sumar puntos
    this._puntos = this._puntos.add(puntosLogro);

    // Publicar evento de dominio
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
    // Nota: Esto requeriría que UsuarioLogro tenga acceso al Logro completo
    // o que se implemente de manera diferente
    return this._logrosObtenidos.filter(_ul => {
      // Por ahora retornamos todos, pero esto debería filtrar por tipo
      return true;
    });
  }
} 