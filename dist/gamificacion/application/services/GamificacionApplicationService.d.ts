import { DesbloquearLogro } from '../useCases/DesbloquearLogro';
import { ListarLogrosDeUsuario } from '../useCases/ListarLogrosDeUsuario';
import { DesbloquearLogroDto, DesbloquearLogroResponseDto } from '../dtos/DesbloquearLogroDto';
import { UsuarioGamificacionDto } from '../dtos/LogroDto';
import { EventBus } from '../events/EventBus';
export declare class GamificacionApplicationService {
    private readonly desbloquearLogroUseCase;
    private readonly listarLogrosDeUsuario;
    private readonly eventBus;
    constructor(desbloquearLogroUseCase: DesbloquearLogro, listarLogrosDeUsuario: ListarLogrosDeUsuario, eventBus: EventBus);
    desbloquearLogro(dto: DesbloquearLogroDto): Promise<DesbloquearLogroResponseDto>;
    obtenerGamificacionUsuario(usuarioId: number): Promise<UsuarioGamificacionDto>;
}
//# sourceMappingURL=GamificacionApplicationService.d.ts.map