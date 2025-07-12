"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logro = void 0;
const LogroId_1 = require("../valueObjects/LogroId");
const LogroNombre_1 = require("../valueObjects/LogroNombre");
const Puntos_1 = require("../valueObjects/Puntos");
class Logro {
    constructor(id, nombre, descripcion, puntosOtorgados, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntosOtorgados = puntosOtorgados;
        this.tipo = tipo;
        if (!descripcion || !descripcion.trim()) {
            throw new Error('La descripción del logro es obligatoria');
        }
        if (!tipo || !tipo.trim()) {
            throw new Error('El tipo del logro es obligatorio');
        }
    }
    static create(id, nombre, descripcion, puntosOtorgados, tipo) {
        return new Logro(LogroId_1.LogroId.create(id), LogroNombre_1.LogroNombre.create(nombre), descripcion, Puntos_1.Puntos.create(puntosOtorgados), tipo);
    }
    esDelTipo(tipo) {
        return this.tipo === tipo;
    }
    obtenerPuntos() {
        return this.puntosOtorgados;
    }
}
exports.Logro = Logro;
//# sourceMappingURL=Logro.js.map