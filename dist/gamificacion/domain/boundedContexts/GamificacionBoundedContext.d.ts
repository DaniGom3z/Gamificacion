import { Logro } from '../entities/Logro';
import { UsuarioAggregate } from '../aggregates/UsuarioAggregate';
import { LogroId } from '../valueObjects/LogroId';
import { UsuarioId } from '../valueObjects/UsuarioId';
/**
 * Bounded Context de Gamificación
 *
 * Este contexto maneja todo lo relacionado con:
 * - Logros y sus reglas de desbloqueo
 * - Sistema de puntos
 * - Progreso del usuario
 * - Rankings y clasificaciones
 */
export declare class GamificacionBoundedContext {
    private readonly _logros;
    private readonly _usuarios;
    /**
     * Registra un logro en el contexto
     */
    registrarLogro(logro: Logro): void;
    /**
     * Obtiene un logro por su ID
     */
    obtenerLogro(logroId: LogroId): Logro | undefined;
    /**
     * Registra un usuario en el contexto
     */
    registrarUsuario(usuario: UsuarioAggregate): void;
    /**
     * Obtiene un usuario por su ID
     */
    obtenerUsuario(usuarioId: UsuarioId): UsuarioAggregate | undefined;
    /**
     * Obtiene todos los logros del contexto
     */
    obtenerTodosLosLogros(): Logro[];
    /**
     * Obtiene todos los usuarios del contexto
     */
    obtenerTodosLosUsuarios(): UsuarioAggregate[];
    /**
     * Calcula el ranking de usuarios por puntos
     */
    obtenerRanking(): Array<{
        usuarioId: number;
        puntos: number;
        posicion: number;
    }>;
}
//# sourceMappingURL=GamificacionBoundedContext.d.ts.map