import { UsuarioId } from '../valueObjects/UsuarioId';
import { LogroId } from '../valueObjects/LogroId';
import { RangoId } from '../valueObjects/RangoId';

export class UsuarioLogro {
  constructor(
    public readonly idUsuario: UsuarioId,
    public readonly idLogro: LogroId,
    public readonly idRango: RangoId,
    public readonly fechaObtenido: Date,

    // Propiedad opcional para datos completos del logro
    public logro?: {
  id: number;
  nombre: string;
  descripcion: string | null;
  puntosOtorgados: number;
  tipo: string;
}

  ) {}

  static create(
    idUsuario: number,
    idLogro: number,
    idRango: number,
    fechaObtenido: Date = new Date(),
    logro?: {
      id: number;
      nombre: string;
      descripcion: string | null;
      puntosOtorgados: number;
      tipo: string;
    }
  ): UsuarioLogro {
    try {
      console.log('Creando UsuarioLogro con idRango:', idRango);
      return new UsuarioLogro(
        UsuarioId.create(idUsuario),
        LogroId.create(idLogro),
        RangoId.create(idRango),
        fechaObtenido,
        logro // asignamos el objeto logro aquí
      );
    } catch (error) {
      console.error('Error en UsuarioLogro.create:', error);
      throw error; // para que el error siga propagándose
    }
  }

  esDelUsuario(usuarioId: UsuarioId): boolean {
    return this.idUsuario.equals(usuarioId);
  }

  esDelLogro(logroId: LogroId): boolean {
    return this.idLogro.equals(logroId);
  }
}
