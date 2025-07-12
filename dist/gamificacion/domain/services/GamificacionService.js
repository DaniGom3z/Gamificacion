"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamificacionService = void 0;
class GamificacionService {
    /**
     * Determina si un usuario ya tiene el logro desbloqueado.
     * @param usuarioLogros Lista de logros que ya tiene el usuario
     * @param idLogro El ID del logro a verificar
     * @returns true si el usuario ya tiene el logro, false en caso contrario
     */
    static yaTieneLogro(usuarioLogros, idLogro) {
        return usuarioLogros.some(ul => ul.idLogro.getValue() === idLogro.getValue());
    }
    /**
     * Valida si un logro es elegible para ser otorgado según las reglas del negocio.
     * Esto es un placeholder: aquí podrías implementar reglas avanzadas si lo deseas.
     * @param tipo Tipo de logro (ej: 'racha', 'quiz')
     * @returns true si es elegible, false en caso contrario
     */
    static esLogroElegible(tipo) {
        // Por ahora aceptamos cualquier tipo; podrías añadir lógica aquí
        return !!tipo && tipo.trim().length > 0;
    }
}
exports.GamificacionService = GamificacionService;
//# sourceMappingURL=GamificacionService.js.map