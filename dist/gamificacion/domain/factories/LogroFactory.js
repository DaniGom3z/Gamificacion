"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogroFactory = void 0;
const Logro_1 = require("../entities/Logro");
class LogroFactory {
    static crearNuevo(nombre, descripcion, puntosOtorgados, tipo) {
        return new Logro_1.Logro(0, nombre, descripcion, puntosOtorgados, tipo);
    }
    static reconstruir(id, nombre, descripcion, puntosOtorgados, tipo) {
        return new Logro_1.Logro(id, nombre, descripcion, puntosOtorgados, tipo);
    }
}
exports.LogroFactory = LogroFactory;
