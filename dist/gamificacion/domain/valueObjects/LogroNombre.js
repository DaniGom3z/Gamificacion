"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogroNombre = void 0;
class LogroNombre {
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        if (!value || !value.trim()) {
            throw new Error('El nombre del logro es obligatorio');
        }
        const trimmedValue = value.trim();
        if (trimmedValue.length < 3) {
            throw new Error('El nombre del logro debe tener al menos 3 caracteres');
        }
        if (trimmedValue.length > 255) {
            throw new Error('El nombre del logro no puede exceder 255 caracteres');
        }
        return new LogroNombre(trimmedValue);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
    toString() {
        return this.value;
    }
}
exports.LogroNombre = LogroNombre;
//# sourceMappingURL=LogroNombre.js.map