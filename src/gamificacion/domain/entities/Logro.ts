
export class Logro {
  constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly descripcion: string,
    public readonly puntosOtorgados: number,
    public readonly tipo: string
  ) {
    if (!nombre || !nombre.trim()) {
      throw new Error('El nombre del logro es obligatorio');
    }
    if (puntosOtorgados < 0) {
      throw new Error('Los puntos otorgados no pueden ser negativos');
    }
    if (!tipo || !tipo.trim()) {
      throw new Error('El tipo del logro es obligatorio');
    }
  }
}
