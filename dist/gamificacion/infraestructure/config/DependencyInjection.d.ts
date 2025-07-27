import { LogroRepository } from '../../domain/repositories/LogroRepository';
import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
import { DesbloquearLogro } from '../../application/useCases/DesbloquearLogro';
import { ListarLogrosDeUsuario } from '../../application/useCases/ListarLogrosDeUsuario';
import { GamificacionApplicationService } from '../../application/services/GamificacionApplicationService';
import { GamificacionController } from '../adapters/controllers/GamificacionController';
/**
 * Configuración de Inyección de Dependencias
 *
 * Este archivo centraliza la creación y configuración de todas las dependencias
 * siguiendo el patrón de Inversión de Dependencias de DDD.
 */
export declare class DependencyInjection {
    private static instance;
    private logroRepository;
    private usuarioLogroRepository;
    private desbloquearLogro;
    private listarLogrosDeUsuario;
    private listarTodosLosLogros;
    private gamificacionApplicationService;
    private rangoRepository;
    private gamificacionController;
    private constructor();
    static getInstance(): DependencyInjection;
    private initializeDependencies;
    getLogroRepository(): LogroRepository;
    getUsuarioLogroRepository(): UsuarioLogroRepository;
    getDesbloquearLogro(): DesbloquearLogro;
    getListarLogrosDeUsuario(): ListarLogrosDeUsuario;
    getGamificacionApplicationService(): GamificacionApplicationService;
    getGamificacionController(): GamificacionController;
    /**
     * Método para limpiar todas las dependencias (útil para tests)
     */
    clear(): void;
}
export declare const di: DependencyInjection;
//# sourceMappingURL=DependencyInjection.d.ts.map