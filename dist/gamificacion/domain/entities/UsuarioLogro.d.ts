import { UsuarioId } from '../valueObjects/UsuarioId';
import { LogroId } from '../valueObjects/LogroId';
import { RangoId } from '../valueObjects/RangoId';
export declare class UsuarioLogro {
    readonly idUsuario: UsuarioId;
    readonly idLogro: LogroId;
    readonly idRango: RangoId;
    readonly fechaObtenido: Date;
    logro?: {
        id: number;
        nombre: string;
        descripcion: string | null;
        puntosOtorgados: number;
        tipo: string;
    } | undefined;
    constructor(idUsuario: UsuarioId, idLogro: LogroId, idRango: RangoId, fechaObtenido: Date, logro?: {
        id: number;
        nombre: string;
        descripcion: string | null;
        puntosOtorgados: number;
        tipo: string;
    } | undefined);
    static create(idUsuario: number, idLogro: number, idRango: number, fechaObtenido?: Date, logro?: {
        id: number;
        nombre: string;
        descripcion: string | null;
        puntosOtorgados: number;
        tipo: string;
    }): UsuarioLogro;
    esDelUsuario(usuarioId: UsuarioId): boolean;
    esDelLogro(logroId: LogroId): boolean;
}
//# sourceMappingURL=UsuarioLogro.d.ts.map