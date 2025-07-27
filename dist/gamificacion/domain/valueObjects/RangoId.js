"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangoId = void 0;
class RangoId {
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        if (!value || value <= 0) {
            throw new Error('El ID del rango debe ser un número positivo');
        }
        return new RangoId(value);
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
exports.RangoId = RangoId;
//# sourceMappingURL=RangoId.js.map