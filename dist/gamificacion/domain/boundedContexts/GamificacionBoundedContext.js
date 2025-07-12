"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificacionBoundedContext = void 0;
/**
 * Bounded Context de Gamificación
 *
 * Este contexto maneja todo lo relacionado con:
 * - Logros y sus reglas de desbloqueo
 * - Sistema de puntos
 * - Progreso del usuario
 * - Rankings y clasificaciones
 */
class GamificacionBoundedContext {
    constructor() {
        this._logros = new Map();
        this._usuarios = new Map();
    }
    /**
     * Registra un logro en el contexto
     */
    registrarLogro(logro) {
        this._logros.set(logro.id.getValue(), logro);
    }
    /**
     * Obtiene un logro por su ID
     */
    obtenerLogro(logroId) {
        return this._logros.get(logroId.getValue());
    }
    /**
     * Registra un usuario en el contexto
     */
    registrarUsuario(usuario) {
        this._usuarios.set(usuario.id.getValue(), usuario);
    }
    /**
     * Obtiene un usuario por su ID
     */
    obtenerUsuario(usuarioId) {
        return this._usuarios.get(usuarioId.getValue());
    }
    /**
     * Obtiene todos los logros del contexto
     */
    obtenerTodosLosLogros() {
        return Array.from(this._logros.values());
    }
    /**
     * Obtiene todos los usuarios del contexto
     */
    obtenerTodosLosUsuarios() {
        return Array.from(this._usuarios.values());
    }
    /**
     * Calcula el ranking de usuarios por puntos
     */
    obtenerRanking() {
        const usuarios = this.obtenerTodosLosUsuarios();
        return usuarios
            .map(usuario => ({
            usuarioId: usuario.id.getValue(),
            puntos: usuario.puntos.getValue(),
            posicion: 0
        }))
            .sort((a, b) => b.puntos - a.puntos)
            .map((usuario, index) => ({
            ...usuario,
            posicion: index + 1
        }));
    }
}
exports.GamificacionBoundedContext = GamificacionBoundedContext;
//# sourceMappingURL=GamificacionBoundedContext.js.map