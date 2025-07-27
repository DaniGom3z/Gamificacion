import { DesbloquearLogro } from "../useCases/DesbloquearLogro";
import { ListarLogrosDeUsuario } from "../useCases/ListarLogrosDeUsuario";
import { DesbloquearLogroDto, DesbloquearLogroResponseDto } from "../dtos/DesbloquearLogroDto";
import { UsuarioGamificacionDto } from "../dtos/LogroDto";
import { RangoRepository } from "../../infraestructure/repositories/RangoRepository";
import { ListarTodosLosLogros } from "../useCases/ListarTodosLosLogros";
export declare class GamificacionApplicationService {
    private readonly desbloquearLogroUseCase;
    private readonly listarLogrosDeUsuario;
    private readonly rangoRepository;
    private readonly listarTodosLosLogros;
    constructor(desbloquearLogroUseCase: DesbloquearLogro, listarLogrosDeUsuario: ListarLogrosDeUsuario, rangoRepository: RangoRepository, listarTodosLosLogros: ListarTodosLosLogros);
    desbloquearLogro(dto: DesbloquearLogroDto): Promise<DesbloquearLogroResponseDto>;
    obtenerGamificacionUsuario(usuarioId: number): Promise<UsuarioGamificacionDto>;
    listarLogros(): Promise<any[]>;
}
//# sourceMappingURL=GamificacionApplicationService.d.ts.map