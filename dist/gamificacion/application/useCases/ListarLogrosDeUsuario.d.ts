import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
export interface LogroCompleto {
    idUsuario: number;
    idLogro: number;
    idRango: number;
    fechaObtenido: Date;
    logro?: {
        id: number;
        nombre: string;
        descripcion: string;
        puntosOtorgados: number;
        tipo: string;
    };
}
export declare class ListarLogrosDeUsuario {
    private readonly usuarioLogroRepo;
    constructor(usuarioLogroRepo: UsuarioLogroRepository);
    execute(idUsuario: number): Promise<LogroCompleto[]>;
}
//# sourceMappingURL=ListarLogrosDeUsuario.d.ts.map