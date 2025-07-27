import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
import { UsuarioId } from '../../domain/valueObjects/UsuarioId';

export interface LogroCompleto {
  idUsuario: number;
  idLogro: number;
  idRango: number;
  fechaObtenido: Date;
  logro?: {
    id: number;
    nombre: string;
    descripcion: string;
    puntosOtorgados: number;
    tipo: string;
  };
}

export class ListarLogrosDeUsuario {
  constructor(
    private readonly usuarioLogroRepo: UsuarioLogroRepository
  ) {}

  async execute(idUsuario: number): Promise<LogroCompleto[]> {
    const usuarioIdVO = UsuarioId.create(idUsuario);
    const usuarioLogros = await this.usuarioLogroRepo.findByUsuario(usuarioIdVO);

    return usuarioLogros.map(ul => ({
      idUsuario: ul.idUsuario.getValue(),
      idLogro: ul.idLogro.getValue(),
      idRango: ul.idLogro.getValue(),
      fechaObtenido: ul.fechaObtenido,
      logro: undefined
    }));
  }
}
