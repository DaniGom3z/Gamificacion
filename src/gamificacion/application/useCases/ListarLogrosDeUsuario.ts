import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
import { UsuarioLogro } from '../../domain/entities/UsuarioLogro';

export class ListarLogrosDeUsuario {
  constructor(
    private readonly usuarioLogroRepo: UsuarioLogroRepository
  ) {}

  async execute(idUsuario: number): Promise<UsuarioLogro[]> {
    return this.usuarioLogroRepo.findByUsuario(idUsuario);
  }
}
