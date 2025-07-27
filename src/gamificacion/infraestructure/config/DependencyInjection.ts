import { LogroRepository } from '../../domain/repositories/LogroRepository';
import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
import { LogroPrismaRepository } from '../repositories/LogroPrismaRepository';
import { UsuarioLogroPrismaRepository } from '../repositories/UsuarioLogroPrismaRepository';
import { DesbloquearLogro } from '../../application/useCases/DesbloquearLogro';
import { ListarLogrosDeUsuario } from '../../application/useCases/ListarLogrosDeUsuario';
import { GamificacionApplicationService } from '../../application/services/GamificacionApplicationService';
import { GamificacionController } from '../adapters/controllers/GamificacionController';
import { RangoRepository } from '../repositories/RangoRepository';
import prisma from '../prisma/client';
import { ListarTodosLosLogros } from "../../application/useCases/ListarTodosLosLogros";

/**
 * Configuración de Inyección de Dependencias
 * 
 * Este archivo centraliza la creación y configuración de todas las dependencias
 * siguiendo el patrón de Inversión de Dependencias de DDD.
 */
export class DependencyInjection {
  private static instance: DependencyInjection;
  
  // Repositorios
  private logroRepository!: LogroRepository;
  private usuarioLogroRepository!: UsuarioLogroRepository;
  
  
  // Casos de uso
  private desbloquearLogro!: DesbloquearLogro;
  private listarLogrosDeUsuario!: ListarLogrosDeUsuario;
    private listarTodosLosLogros!: ListarTodosLosLogros; 
  // Servicios de aplicación
  private gamificacionApplicationService!: GamificacionApplicationService;
  
private rangoRepository!: RangoRepository;
  
  // Controladores
  private gamificacionController!: GamificacionController;

  private constructor() {
    this.initializeDependencies();
  }

  static getInstance(): DependencyInjection {
    if (!DependencyInjection.instance) {
      DependencyInjection.instance = new DependencyInjection();
    }
    return DependencyInjection.instance;
  }

  private initializeDependencies(): void {
    // 1. Inicializar Event Bus

    // 2. Inicializar Repositorios
    this.logroRepository = new LogroPrismaRepository(prisma);
    this.usuarioLogroRepository = new UsuarioLogroPrismaRepository(prisma);
     this.rangoRepository = new RangoRepository(prisma); // 🔼 MOVER AQUÍ

    // 3. Inicializar Casos de Uso
    this.desbloquearLogro = new DesbloquearLogro(
      this.logroRepository,
      this.usuarioLogroRepository,
      this.rangoRepository
    );

    this.listarLogrosDeUsuario = new ListarLogrosDeUsuario(
      this.usuarioLogroRepository
    );
this.listarTodosLosLogros = new ListarTodosLosLogros(this.logroRepository);

    // 4. Inicializar Servicios de Aplicación
    this.gamificacionApplicationService = new GamificacionApplicationService(
      this.desbloquearLogro,
      this.listarLogrosDeUsuario,
      this.rangoRepository,
      this.listarTodosLosLogros 
    );

    // 5. Inicializar Controladores
    this.gamificacionController = new GamificacionController(
      this.gamificacionApplicationService
    );
  }

  // Getters para acceder a las dependencias
  getLogroRepository(): LogroRepository {
    return this.logroRepository;
  }

  getUsuarioLogroRepository(): UsuarioLogroRepository {
    return this.usuarioLogroRepository;
  }

  getDesbloquearLogro(): DesbloquearLogro {
    return this.desbloquearLogro;
  }

  getListarLogrosDeUsuario(): ListarLogrosDeUsuario {
    return this.listarLogrosDeUsuario;
  }

  getGamificacionApplicationService(): GamificacionApplicationService {
    return this.gamificacionApplicationService;
  }


  getGamificacionController(): GamificacionController {
    return this.gamificacionController;
  }


  /**
   * Método para limpiar todas las dependencias (útil para tests)
   */
  clear(): void {
    // En una implementación más robusta, aquí se limpiarían las conexiones
    // de base de datos, etc.
  }
}

// Exportar una instancia singleton
export const di = DependencyInjection.getInstance(); 