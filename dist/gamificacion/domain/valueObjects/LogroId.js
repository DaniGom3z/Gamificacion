"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogroId = void 0;
class LogroId {
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        if (!value || value <= 0) {
            throw new Error('El ID del logro debe ser un número positivo');
        }
        return new LogroId(value);
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
exports.LogroId = LogroId;
//# sourceMappingURL=LogroId.js.map