import { DesbloquearLogro } from '../useCases/DesbloquearLogro';
import { ListarLogrosDeUsuario } from '../useCases/ListarLogrosDeUsuario';
import { DesbloquearLogroDto, DesbloquearLogroResponseDto } from '../dtos/DesbloquearLogroDto';
import { UsuarioGamificacionDto } from '../dtos/LogroDto';
import { EventBus } from '../events/EventBus';

export class GamificacionApplicationService {
  constructor(
    private readonly desbloquearLogroUseCase: DesbloquearLogro,
    private readonly listarLogrosDeUsuario: ListarLogrosDeUsuario,
    private readonly eventBus: EventBus
  ) {}

  async desbloquearLogro(dto: DesbloquearLogroDto): Promise<DesbloquearLogroResponseDto> {
    try {
      const resultado = await this.desbloquearLogroUseCase.execute(dto.usuarioId, dto.logroId);
      
      // Publicar eventos de dominio
      if (resultado.domainEvents.length > 0) {
        await this.eventBus.publish(resultado.domainEvents);
      }

      return {
        success: true,
        message: 'Logro desbloqueado con éxito',
        puntosOtorgados: resultado.puntosOtorgados,
        puntosTotales: resultado.puntosTotales
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  async obtenerGamificacionUsuario(usuarioId: number): Promise<UsuarioGamificacionDto> {
    const logros = await this.listarLogrosDeUsuario.execute(usuarioId);
    
    const puntosTotales = logros.reduce((total, logro) => {
      return total + (logro.logro?.puntosOtorgados || 0);
    }, 0);

    return {
      idUsuario: usuarioId,
      puntosTotales,
      cantidadLogros: logros.length,
      logros: logros.map(logro => ({
        idUsuario: logro.idUsuario,
        idLogro: logro.idLogro,
        fechaObtenido: logro.fechaObtenido.toISOString(),
        logro: logro.logro ? {
          id: logro.logro.id,
          nombre: logro.logro.nombre,
          descripcion: logro.logro.descripcion,
          puntosOtorgados: logro.logro.puntosOtorgados,
          tipo: logro.logro.tipo
        } : undefined
      }))
    };
  }
} 