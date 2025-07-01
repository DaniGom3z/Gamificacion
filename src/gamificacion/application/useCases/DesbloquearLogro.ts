import { LogroRepository } from '../../domain/repositories/LogroRepository';
import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository'; 
import { UsuarioLogroFactory } from '../../domain/factories/UsuarioLogroFactory';
import { GamificacionService } from '../../domain/services/GamificacionService';

export class DesbloquearLogro {
  constructor(
    private readonly logroRepo: LogroRepository,
    private readonly usuarioLogroRepo: UsuarioLogroRepository
  ) {}

  async execute(idUsuario: number, idLogro: number): Promise<void> {
    // Verificar que el logro existe
    const logro = await this.logroRepo.findById(idLogro);
    if (!logro) {
      throw new Error(`El logro con id ${idLogro} no existe`);
    }

    // Verificar si ya tiene el logro
    const yaTiene = await this.usuarioLogroRepo.exists(idUsuario, idLogro);
    if (yaTiene) {
      throw new Error(`El usuario ${idUsuario} ya tiene el logro ${idLogro}`);
    }

    // Verificar reglas del negocio (opcional: aquí puedes añadir lógica adicional)
    if (!GamificacionService.esLogroElegible(logro.tipo)) {
      throw new Error(`El logro tipo ${logro.tipo} no es elegible para ser otorgado`);
    }

    // Crear la entidad
    const usuarioLogro = UsuarioLogroFactory.crearNuevo(idUsuario, idLogro);

    // Guardar en el repositorio
    await this.usuarioLogroRepo.save(usuarioLogro);

    // Aquí podrías publicar un evento: LogroDesbloqueadoEvent
    // Por ahora lo dejamos como parte del dominio
  }
}
