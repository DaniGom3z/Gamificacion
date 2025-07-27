import { UsuarioLogro } from '../entities/UsuarioLogro';

export class UsuarioLogroFactory {

  static crearNuevo(
    idUsuario: number,
    idLogro: number,
    idRango: number = 0  
  ): UsuarioLogro {
    return UsuarioLogro.create(
      idUsuario,
      idLogro,
      idRango,
      new Date()
    );
  }

  static reconstruir(
    idUsuario: number,
    idLogro: number,
    idRango: number,
    fechaObtenido: Date
  ): UsuarioLogro {
    return UsuarioLogro.create(
      idUsuario,
      idLogro,
      idRango,
      fechaObtenido
    );
  }
}
