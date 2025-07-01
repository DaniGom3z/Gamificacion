import { UsuarioLogro } from '../entities/UsuarioLogro';

export class UsuarioLogroFactory {

  static crearNuevo(
    idUsuario: number,
    idLogro: number
  ): UsuarioLogro {
    return new UsuarioLogro(
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
    return new UsuarioLogro(
      idUsuario,
      idLogro,
      fechaObtenido
    );
  }
}
