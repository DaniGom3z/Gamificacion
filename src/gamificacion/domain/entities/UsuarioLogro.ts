import { UsuarioId } from '../valueObjects/UsuarioId';
import { LogroId } from '../valueObjects/LogroId';

export class UsuarioLogro {
  constructor(
    public readonly idUsuario: UsuarioId,
    public readonly idLogro: LogroId,
    public readonly fechaObtenido: Date,
  ) {}

  static create(
    idUsuario: number,
    idLogro: number,
    fechaObtenido: Date = new Date()
  ): UsuarioLogro {
    return new UsuarioLogro(
      UsuarioId.create(idUsuario),
      LogroId.create(idLogro),
      fechaObtenido
    );
  }

  esDelUsuario(usuarioId: UsuarioId): boolean {
    return this.idUsuario.equals(usuarioId);
  }

  esDelLogro(logroId: LogroId): boolean {
    return this.idLogro.equals(logroId);
  }
}
