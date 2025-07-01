"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logro = void 0;
class Logro {
    constructor(id, nombre, descripcion, puntosOtorgados, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntosOtorgados = puntosOtorgados;
        this.tipo = tipo;
        if (!nombre || !nombre.trim()) {
            throw new Error('El nombre del logro es obligatorio');
        }
        if (puntosOtorgados < 0) {
            throw new Error('Los puntos otorgados no pueden ser negativos');
        }
        if (!tipo || !tipo.trim()) {
            throw new Error('El tipo del logro es obligatorio');
        }
    }
}
exports.Logro = Logro;
