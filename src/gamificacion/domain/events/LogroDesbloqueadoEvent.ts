import { DomainEvent } from './DomainEvent';

export class LogroDesbloqueadoEvent extends DomainEvent {
  constructor(
    public readonly usuarioId: number,
    public readonly logroId: number,
    public readonly puntosOtorgados: number
  ) {
    super();
  }

  getEventName(): string {
    return 'LogroDesbloqueado';
  }
}
