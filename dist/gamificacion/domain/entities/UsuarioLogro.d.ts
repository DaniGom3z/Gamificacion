import { UsuarioId } from '../valueObjects/UsuarioId';
import { LogroId } from '../valueObjects/LogroId';
export declare class UsuarioLogro {
    readonly idUsuario: UsuarioId;
    readonly idLogro: LogroId;
    readonly fechaObtenido: Date;
    constructor(idUsuario: UsuarioId, idLogro: LogroId, fechaObtenido: Date);
    static create(idUsuario: number, idLogro: number, fechaObtenido?: Date): UsuarioLogro;
    esDelUsuario(usuarioId: UsuarioId): boolean;
    esDelLogro(logroId: LogroId): boolean;
}
//# sourceMappingURL=UsuarioLogro.d.ts.map