"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioId = void 0;
class UsuarioId {
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        if (!value || value <= 0) {
            throw new Error('El ID del usuario debe ser un número positivo');
        }
        return new UsuarioId(value);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
    toString() {
        return this.value.toString();
    }
}
exports.UsuarioId = UsuarioId;
//# sourceMappingURL=UsuarioId.js.map