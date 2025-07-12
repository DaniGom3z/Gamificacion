import { LogroId } from '../valueObjects/LogroId';
import { LogroNombre } from '../valueObjects/LogroNombre';
import { Puntos } from '../valueObjects/Puntos';
export declare class Logro {
    readonly id: LogroId;
    readonly nombre: LogroNombre;
    readonly descripcion: string;
    readonly puntosOtorgados: Puntos;
    readonly tipo: string;
    constructor(id: LogroId, nombre: LogroNombre, descripcion: string, puntosOtorgados: Puntos, tipo: string);
    static create(id: number, nombre: string, descripcion: string, puntosOtorgados: number, tipo: string): Logro;
    esDelTipo(tipo: string): boolean;
    obtenerPuntos(): Puntos;
}
//# sourceMappingURL=Logro.d.ts.map