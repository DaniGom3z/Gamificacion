import { LogroRepository } from "../../domain/repositories/LogroRepository";
import { UsuarioLogroRepository } from "../../domain/repositories/UsuarioLogroRepository";
import { UsuarioAggregate } from "../../domain/aggregates/UsuarioAggregate";
import { UsuarioId } from "../../domain/valueObjects/UsuarioId";
import { LogroId } from "../../domain/valueObjects/LogroId";
import { GamificacionService } from "../../domain/services/GamificacionService";
import { RangoRepository } from "../../infraestructure/repositories/RangoRepository";

export interface DesbloquearLogroResult {
  success: boolean;
  puntosOtorgados: number;
  puntosTotales: number;
  domainEvents: any[];
}

export class DesbloquearLogro {
  constructor(
    private readonly logroRepo: LogroRepository,
    private readonly usuarioLogroRepo: UsuarioLogroRepository,
     private readonly rangoRepository: RangoRepository 
  ) {}

  async execute(
  usuarioId: number,
  logroId: number
): Promise<DesbloquearLogroResult> {
  const usuarioIdVO = UsuarioId.create(usuarioId);
  const logroIdVO = LogroId.create(logroId);

  // 1. Verificar que el logro existe
  const logro = await this.logroRepo.findById(logroIdVO);
  if (!logro) {
    throw new Error(`El logro con id ${logroId} no existe`);
  }

  // 2. Obtener o crear aggregate del usuario
  let usuarioAggregate = await this.usuarioLogroRepo.findUsuarioAggregate(
    usuarioIdVO
  );
  if (!usuarioAggregate) {
    usuarioAggregate = UsuarioAggregate.create(usuarioIdVO);
  }

  // 3. Verificar elegibilidad del logro
  if (!GamificacionService.esLogroElegible(logro.tipo)) {
    throw new Error(
      `El logro tipo ${logro.tipo} no es elegible para ser otorgado`
    );
  }

  // 4. Calcular puntos totales actualizados (antes de sumar en el aggregate)
  const puntosTotalesActuales = usuarioAggregate.puntos.getValue();
  const nuevosPuntosTotales = puntosTotalesActuales + logro.puntosOtorgados.getValue();

  // 5. Aquí debes obtener el rango según los puntos totales actualizados
  // (Para esto necesitas tener rangoRepository disponible en la clase)
  const rango = await this.rangoRepository.obtenerRangoPorPuntos(nuevosPuntosTotales);
  if (!rango || rango.id <= 0) {
    throw new Error('No se encontró un rango válido para los puntos totales');
  }

  // 6. Llamar a desbloquearLogro pasando también el idRango
  usuarioAggregate.desbloquearLogro(
    logroIdVO,
    logro.puntosOtorgados,  // Aquí debería ser tipo Puntos, asegúrate
    rango.id                // Pasa el idRango correcto
  );

  // 7. Guardar cambios
  await this.usuarioLogroRepo.saveUsuarioAggregate(usuarioAggregate);

  // 8. Obtener eventos y limpiar
  const domainEvents = [...usuarioAggregate.domainEvents];
  usuarioAggregate.clearDomainEvents();

  // 9. Retornar resultado
  return {
    success: true,
    puntosOtorgados: logro.puntosOtorgados.getValue(),
    puntosTotales: usuarioAggregate.puntos.getValue(),
    domainEvents,
  };
}

}
