export class UsuarioLogro {
  constructor(
    public readonly idUsuario: number,
    public readonly idLogro: number,
    public readonly fechaObtenido: Date,
  ) {
    if (!idUsuario || idUsuario <= 0) {
      throw new Error('El idUsuario debe ser un número válido');
    }
    if (!idLogro || idLogro <= 0) {
      throw new Error('El idLogro debe ser un número válido');
    }
  }
}
