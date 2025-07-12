import { UsuarioLogro } from '../entities/UsuarioLogro';
import { UsuarioId } from '../valueObjects/UsuarioId';
import { LogroId } from '../valueObjects/LogroId';
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
    findByUsuario(idUsuario: UsuarioId): Promise<UsuarioLogro[]>;
    /**
     * Verifica si un usuario ya tiene un logro específico.
     * @param idUsuario ID del usuario
     * @param idLogro ID del logro
     * @returns true si ya tiene el logro, false si no
     */
    exists(idUsuario: UsuarioId, idLogro: LogroId): Promise<boolean>;
    /**
     * Obtiene el aggregate del usuario con sus logros y puntos
     * @param idUsuario ID del usuario
     * @returns El aggregate del usuario o null si no existe
     */
    findUsuarioAggregate(idUsuario: UsuarioId): Promise<any | null>;
    /**
     * Guarda el aggregate del usuario
     * @param usuarioAggregate El aggregate del usuario
     */
    saveUsuarioAggregate(usuarioAggregate: any): Promise<void>;
}
//# sourceMappingURL=UsuarioLogroRepository.d.ts.map