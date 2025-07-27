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
  fechaObtenido: Date,
  logro?: {
    id: number;
    nombre: string;
    descripcion: string | null;
    puntosOtorgados: number;
    tipo: string;
  }
): UsuarioLogro {
  const usuarioLogro = UsuarioLogro.create(
    idUsuario,
    idLogro,
    idRango,
    fechaObtenido
  );

  if (logro) {
    usuarioLogro.logro = logro;  // Asignar el objeto logro
  }

  return usuarioLogro;
}

}
