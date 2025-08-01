import { Logro } from '../entities/Logro';

export class LogroFactory {

  static crearNuevo(
    nombre: string,
    descripcion: string,
    puntosOtorgados: number,
    tipo: string
  ): Logro {
    return Logro.create(0, nombre, descripcion, puntosOtorgados, tipo);
  }

  static reconstruir(
    id: number,
    nombre: string,
    descripcion: string,
    puntosOtorgados: number,
    tipo: string
  ): Logro {
    return Logro.create(id, nombre, descripcion, puntosOtorgados, tipo);
  }
}
