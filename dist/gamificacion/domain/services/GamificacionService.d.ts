import { UsuarioLogro } from '../entities/UsuarioLogro';
import { LogroId } from '../valueObjects/LogroId';
export declare class GamificacionService {
    /**
     * Determina si un usuario ya tiene el logro desbloqueado.
     * @param usuarioLogros Lista de logros que ya tiene el usuario
     * @param idLogro El ID del logro a verificar
     * @returns true si el usuario ya tiene el logro, false en caso contrario
     */
    static yaTieneLogro(usuarioLogros: UsuarioLogro[], idLogro: LogroId): boolean;
    /**
     * Valida si un logro es elegible para ser otorgado según las reglas del negocio.
     * Esto es un placeholder: aquí podrías implementar reglas avanzadas si lo deseas.
     * @param tipo Tipo de logro (ej: 'racha', 'quiz')
     * @returns true si es elegible, false en caso contrario
     */
    static esLogroElegible(tipo: string): boolean;
}
//# sourceMappingURL=GamificacionService.d.ts.map