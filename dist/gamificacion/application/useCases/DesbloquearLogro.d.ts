import { LogroRepository } from '../../domain/repositories/LogroRepository';
import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
export interface DesbloquearLogroResult {
    success: boolean;
    puntosOtorgados: number;
    puntosTotales: number;
    domainEvents: any[];
}
export declare class DesbloquearLogro {
    private readonly logroRepo;
    private readonly usuarioLogroRepo;
    constructor(logroRepo: LogroRepository, usuarioLogroRepo: UsuarioLogroRepository);
    execute(usuarioId: number, logroId: number): Promise<DesbloquearLogroResult>;
}
//# sourceMappingURL=DesbloquearLogro.d.ts.map