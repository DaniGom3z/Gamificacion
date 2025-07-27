import { UsuarioId } from '../valueObjects/UsuarioId';
import { LogroId } from '../valueObjects/LogroId';
import { RangoId } from '../valueObjects/RangoId';
export declare class UsuarioLogro {
    readonly idUsuario: UsuarioId;
    readonly idLogro: LogroId;
    readonly idRango: RangoId;
    readonly fechaObtenido: Date;
    constructor(idUsuario: UsuarioId, idLogro: LogroId, idRango: RangoId, fechaObtenido: Date);
    static create(idUsuario: number, idLogro: number, idRango: number, fechaObtenido?: Date): UsuarioLogro;
    esDelUsuario(usuarioId: UsuarioId): boolean;
    esDelLogro(logroId: LogroId): boolean;
}
//# sourceMappingURL=UsuarioLogro.d.ts.map