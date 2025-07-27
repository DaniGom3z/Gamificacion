import { DesbloquearLogro } from "../useCases/DesbloquearLogro";
import { ListarLogrosDeUsuario } from "../useCases/ListarLogrosDeUsuario";
import { DesbloquearLogroDto, DesbloquearLogroResponseDto } from "../dtos/DesbloquearLogroDto";
import { UsuarioGamificacionDto } from "../dtos/LogroDto";
import { RangoRepository } from "../../infraestructure/repositories/RangoRepository";
export declare class GamificacionApplicationService {
    private readonly desbloquearLogroUseCase;
    private readonly listarLogrosDeUsuario;
    private readonly rangoRepository;
    constructor(desbloquearLogroUseCase: DesbloquearLogro, listarLogrosDeUsuario: ListarLogrosDeUsuario, rangoRepository: RangoRepository);
    desbloquearLogro(dto: DesbloquearLogroDto): Promise<DesbloquearLogroResponseDto>;
    obtenerGamificacionUsuario(usuarioId: number): Promise<UsuarioGamificacionDto>;
}
//# sourceMappingURL=GamificacionApplicationService.d.ts.map