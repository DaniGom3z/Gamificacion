import { LogroRepository } from "../../domain/repositories/LogroRepository";
import { UsuarioLogroRepository } from "../../domain/repositories/UsuarioLogroRepository";
import { RangoRepository } from "../../infraestructure/repositories/RangoRepository";
export interface DesbloquearLogroResult {
    success: boolean;
    puntosOtorgados: number;
    puntosTotales: number;
    domainEvents: any[];
}
export declare class DesbloquearLogro {
    private readonly logroRepo;
    private readonly usuarioLogroRepo;
    private readonly rangoRepository;
    constructor(logroRepo: LogroRepository, usuarioLogroRepo: UsuarioLogroRepository, rangoRepository: RangoRepository);
    execute(usuarioId: number, logroId: number): Promise<DesbloquearLogroResult>;
}
//# sourceMappingURL=DesbloquearLogro.d.ts.map