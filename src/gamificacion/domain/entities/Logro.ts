import { LogroId } from '../valueObjects/LogroId';
import { LogroNombre } from '../valueObjects/LogroNombre';
import { Puntos } from '../valueObjects/Puntos';

export class Logro {
  constructor(
    public readonly id: LogroId,
    public readonly nombre: LogroNombre,
    public readonly descripcion: string,
    public readonly puntosOtorgados: Puntos,
    public readonly tipo: string
  ) {
    if (!descripcion || !descripcion.trim()) {
      throw new Error('La descripción del logro es obligatoria');
    }
    if (!tipo || !tipo.trim()) {
      throw new Error('El tipo del logro es obligatorio');
    }
  }

  static create(
    id: number,
    nombre: string,
    descripcion: string,
    puntosOtorgados: number,
    tipo: string
  ): Logro {
    return new Logro(
      LogroId.create(id),
      LogroNombre.create(nombre),
      descripcion,
      Puntos.create(puntosOtorgados),
      tipo
    );
  }

  esDelTipo(tipo: string): boolean {
    return this.tipo === tipo;
  }

  obtenerPuntos(): Puntos {
    return this.puntosOtorgados;
  }
}
