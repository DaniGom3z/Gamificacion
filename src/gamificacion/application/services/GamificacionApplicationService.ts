import { DesbloquearLogro } from "../useCases/DesbloquearLogro";
import { ListarLogrosDeUsuario } from "../useCases/ListarLogrosDeUsuario";
import {
  DesbloquearLogroDto,
  DesbloquearLogroResponseDto,
} from "../dtos/DesbloquearLogroDto";
import { UsuarioGamificacionDto } from "../dtos/LogroDto";
import { RangoRepository } from "../../infraestructure/repositories/RangoRepository";
import { ListarTodosLosLogros } from "../useCases/ListarTodosLosLogros"; // importa el nuevo caso de uso

export class GamificacionApplicationService {
  constructor(
    private readonly desbloquearLogroUseCase: DesbloquearLogro,
    private readonly listarLogrosDeUsuario: ListarLogrosDeUsuario,
    private readonly rangoRepository: RangoRepository,
    private readonly listarTodosLosLogros: ListarTodosLosLogros // inyecta el nuevo caso de uso
  ) {}

  

  async desbloquearLogro(
    dto: DesbloquearLogroDto
  ): Promise<DesbloquearLogroResponseDto> {
    try {
      const resultado = await this.desbloquearLogroUseCase.execute(
        dto.idUsuario,
        dto.logroId
      );

      return {
        success: true,
        message: "Logro desbloqueado con éxito",
        puntosOtorgados: resultado.puntosOtorgados,
        puntosTotales: resultado.puntosTotales,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

 async obtenerGamificacionUsuario(
  usuarioId: number
): Promise<UsuarioGamificacionDto> {
  const logros = await this.listarLogrosDeUsuario.execute(usuarioId);

  const puntosTotales = logros.reduce((total, logro) => {
    return total + (logro.logro?.puntosOtorgados || 0);
  }, 0);

  console.log('aqui andamos en aplication service');
  const rango = await this.rangoRepository.obtenerRangoPorPuntos(
    puntosTotales
  );

  console.log('Rango obtenido:', rango);

  return {
  idUsuario: usuarioId,
  puntosTotales,
  idRango: rango?.id ?? 0,
  nombreRango: rango?.nombre ?? "", 
  cantidadLogros: logros.length,
  logros: logros.map((logro) => ({
  idUsuario: logro.idUsuario,
  idLogro: logro.idLogro,
  nombreLogro: logro.logro?.nombre || "", // Asegúrate que accedes aquí correctamente
    fechaObtenido: logro.fechaObtenido.toISOString(),
   
  })),
};
}

 async listarLogros(): Promise<any[]> {
    return await this.listarTodosLosLogros.execute();
  }
}
