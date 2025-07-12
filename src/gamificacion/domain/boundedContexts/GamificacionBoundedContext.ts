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
export class GamificacionBoundedContext {
  private readonly _logros: Map<number, Logro> = new Map();
  private readonly _usuarios: Map<number, UsuarioAggregate> = new Map();

  /**
   * Registra un logro en el contexto
   */
  registrarLogro(logro: Logro): void {
    this._logros.set(logro.id.getValue(), logro);
  }

  /**
   * Obtiene un logro por su ID
   */
  obtenerLogro(logroId: LogroId): Logro | undefined {
    return this._logros.get(logroId.getValue());
  }

  /**
   * Registra un usuario en el contexto
   */
  registrarUsuario(usuario: UsuarioAggregate): void {
    this._usuarios.set(usuario.id.getValue(), usuario);
  }

  /**
   * Obtiene un usuario por su ID
   */
  obtenerUsuario(usuarioId: UsuarioId): UsuarioAggregate | undefined {
    return this._usuarios.get(usuarioId.getValue());
  }

  /**
   * Obtiene todos los logros del contexto
   */
  obtenerTodosLosLogros(): Logro[] {
    return Array.from(this._logros.values());
  }

  /**
   * Obtiene todos los usuarios del contexto
   */
  obtenerTodosLosUsuarios(): UsuarioAggregate[] {
    return Array.from(this._usuarios.values());
  }

  /**
   * Calcula el ranking de usuarios por puntos
   */
  obtenerRanking(): Array<{ usuarioId: number; puntos: number; posicion: number }> {
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