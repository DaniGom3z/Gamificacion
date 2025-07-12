"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puntos = void 0;
class Puntos {
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        if (value < 0) {
            throw new Error('Los puntos no pueden ser negativos');
        }
        if (value > 10000) {
            throw new Error('Los puntos no pueden exceder 10000');
        }
        return new Puntos(value);
    }
    getValue() {
        return this.value;
    }
    add(other) {
        return Puntos.create(this.value + other.value);
    }
    subtract(other) {
        const result = this.value - other.value;
        if (result < 0) {
            throw new Error('No se pueden restar más puntos de los disponibles');
        }
        return Puntos.create(result);
    }
    equals(other) {
        return this.value === other.value;
    }
    isGreaterThan(other) {
        return this.value > other.value;
    }
    isLessThan(other) {
        return this.value < other.value;
    }
    toString() {
        return this.value.toString();
    }
}
exports.Puntos = Puntos;
//# sourceMappingURL=Puntos.js.map