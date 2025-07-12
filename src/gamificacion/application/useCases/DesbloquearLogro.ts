import { LogroRepository } from '../../domain/repositories/LogroRepository';
import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
import { UsuarioAggregate } from '../../domain/aggregates/UsuarioAggregate';
import { UsuarioId } from '../../domain/valueObjects/UsuarioId';
import { LogroId } from '../../domain/valueObjects/LogroId';
import { GamificacionService } from '../../domain/services/GamificacionService';

export interface DesbloquearLogroResult {
  success: boolean;
  puntosOtorgados: number;
  puntosTotales: number;
  domainEvents: any[];
}

export class DesbloquearLogro {
  constructor(
    private readonly logroRepo: LogroRepository,
    private readonly usuarioLogroRepo: UsuarioLogroRepository
  ) {}

  async execute(usuarioId: number, logroId: number): Promise<DesbloquearLogroResult> {
    const usuarioIdVO = UsuarioId.create(usuarioId);
    const logroIdVO = LogroId.create(logroId);

    // Verificar que el logro existe
    const logro = await this.logroRepo.findById(logroIdVO);
    if (!logro) {
      throw new Error(`El logro con id ${logroId} no existe`);
    }

    // Obtener o crear el aggregate del usuario
    let usuarioAggregate = await this.usuarioLogroRepo.findUsuarioAggregate(usuarioIdVO);
    if (!usuarioAggregate) {
      usuarioAggregate = UsuarioAggregate.create(usuarioIdVO);
    }

    // Verificar reglas del negocio
    if (!GamificacionService.esLogroElegible(logro.tipo)) {
      throw new Error(`El logro tipo ${logro.tipo} no es elegible para ser otorgado`);
    }

    // Desbloquear el logro en el aggregate
    usuarioAggregate.desbloquearLogro(logroIdVO, logro.puntosOtorgados);

    // Guardar el aggregate
    await this.usuarioLogroRepo.saveUsuarioAggregate(usuarioAggregate);

    // Obtener eventos de dominio
    const domainEvents = [...usuarioAggregate.domainEvents];
    usuarioAggregate.clearDomainEvents();

    return {
      success: true,
      puntosOtorgados: logro.puntosOtorgados.getValue(),
      puntosTotales: usuarioAggregate.puntos.getValue(),
      domainEvents
    };
  }
}
