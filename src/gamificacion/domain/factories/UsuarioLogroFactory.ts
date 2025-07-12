import { UsuarioLogro } from '../entities/UsuarioLogro';

export class UsuarioLogroFactory {

  static crearNuevo(
    idUsuario: number,
    idLogro: number
  ): UsuarioLogro {
    return UsuarioLogro.create(
      idUsuario,
      idLogro,
      new Date() 
    );
  }

  static reconstruir(
    idUsuario: number,
    idLogro: number,
    fechaObtenido: Date
  ): UsuarioLogro {
    return UsuarioLogro.create(
      idUsuario,
      idLogro,
      fechaObtenido
    );
  }
}
