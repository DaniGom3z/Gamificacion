"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.di = exports.DependencyInjection = void 0;
const LogroPrismaRepository_1 = require("../repositories/LogroPrismaRepository");
const UsuarioLogroPrismaRepository_1 = require("../repositories/UsuarioLogroPrismaRepository");
const DesbloquearLogro_1 = require("../../application/useCases/DesbloquearLogro");
const ListarLogrosDeUsuario_1 = require("../../application/useCases/ListarLogrosDeUsuario");
const GamificacionApplicationService_1 = require("../../application/services/GamificacionApplicationService");
const GamificacionController_1 = require("../adapters/controllers/GamificacionController");
const RangoRepository_1 = require("../repositories/RangoRepository");
const client_1 = __importDefault(require("../prisma/client"));
const ListarTodosLosLogros_1 = require("../../application/useCases/ListarTodosLosLogros");
/**
 * Configuración de Inyección de Dependencias
 *
 * Este archivo centraliza la creación y configuración de todas las dependencias
 * siguiendo el patrón de Inversión de Dependencias de DDD.
 */
class DependencyInjection {
    constructor() {
        this.initializeDependencies();
    }
    static getInstance() {
        if (!DependencyInjection.instance) {
            DependencyInjection.instance = new DependencyInjection();
        }
        return DependencyInjection.instance;
    }
    initializeDependencies() {
        // 1. Inicializar Event Bus
        // 2. Inicializar Repositorios
        this.logroRepository = new LogroPrismaRepository_1.LogroPrismaRepository(client_1.default);
        this.usuarioLogroRepository = new UsuarioLogroPrismaRepository_1.UsuarioLogroPrismaRepository(client_1.default);
        this.rangoRepository = new RangoRepository_1.RangoRepository(client_1.default); // 🔼 MOVER AQUÍ
        // 3. Inicializar Casos de Uso
        this.desbloquearLogro = new DesbloquearLogro_1.DesbloquearLogro(this.logroRepository, this.usuarioLogroRepository, this.rangoRepository);
        this.listarLogrosDeUsuario = new ListarLogrosDeUsuario_1.ListarLogrosDeUsuario(this.usuarioLogroRepository);
        this.listarTodosLosLogros = new ListarTodosLosLogros_1.ListarTodosLosLogros(this.logroRepository);
        // 4. Inicializar Servicios de Aplicación
        this.gamificacionApplicationService = new GamificacionApplicationService_1.GamificacionApplicationService(this.desbloquearLogro, this.listarLogrosDeUsuario, this.rangoRepository, this.listarTodosLosLogros);
        // 5. Inicializar Controladores
        this.gamificacionController = new GamificacionController_1.GamificacionController(this.gamificacionApplicationService);
    }
    // Getters para acceder a las dependencias
    getLogroRepository() {
        return this.logroRepository;
    }
    getUsuarioLogroRepository() {
        return this.usuarioLogroRepository;
    }
    getDesbloquearLogro() {
        return this.desbloquearLogro;
    }
    getListarLogrosDeUsuario() {
        return this.listarLogrosDeUsuario;
    }
    getGamificacionApplicationService() {
        return this.gamificacionApplicationService;
    }
    getGamificacionController() {
        return this.gamificacionController;
    }
    /**
     * Método para limpiar todas las dependencias (útil para tests)
     */
    clear() {
        // En una implementación más robusta, aquí se limpiarían las conexiones
        // de base de datos, etc.
    }
}
exports.DependencyInjection = DependencyInjection;
// Exportar una instancia singleton
exports.di = DependencyInjection.getInstance();
//# sourceMappingURL=DependencyInjection.js.map