import { UsuarioLogro } from '../entities/UsuarioLogro';

export interface UsuarioLogroRepository {
  /**
   * Guarda un nuevo UsuarioLogro.
   * @param usuarioLogro La entidad UsuarioLogro
   */
  save(usuarioLogro: UsuarioLogro): Promise<void>;

  /**
   * Devuelve los logros obtenidos por un usuario.
   * @param idUsuario ID del usuario
   * @returns Lista de logros que ha obtenido el usuario
   */
  findByUsuario(idUsuario: number): Promise<UsuarioLogro[]>;

  /**
   * Verifica si un usuario ya tiene un logro específico.
   * @param idUsuario ID del usuario
   * @param idLogro ID del logro
   * @returns true si ya tiene el logro, false si no
   */
  exists(idUsuario: number, idLogro: number): Promise<boolean>;
}
