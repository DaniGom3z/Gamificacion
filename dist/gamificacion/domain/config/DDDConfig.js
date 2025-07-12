"use strict";
/**
 * Configuración y documentación de la arquitectura DDD
 *
 * Este archivo documenta la estructura Domain-Driven Design implementada
 * en el sistema de gamificación.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DDD_STRUCTURE = void 0;
exports.DDD_STRUCTURE = {
    // CAPA DE DOMINIO
    domain: {
        // Entidades del dominio
        entities: {
            Logro: 'Representa un logro que puede ser desbloqueado por los usuarios',
            UsuarioLogro: 'Representa la relación entre un usuario y un logro desbloqueado'
        },
        // Value Objects
        valueObjects: {
            LogroId: 'Identificador único de un logro',
            UsuarioId: 'Identificador único de un usuario',
            LogroNombre: 'Nombre del logro con validaciones',
            Puntos: 'Cantidad de puntos con operaciones matemáticas'
        },
        // Aggregate Roots
        aggregates: {
            UsuarioAggregate: 'Agregado raíz que maneja el estado del usuario y sus logros'
        },
        // Servicios de dominio
        services: {
            GamificacionService: 'Servicio que implementa reglas de negocio específicas'
        },
        // Eventos de dominio
        events: {
            DomainEvent: 'Clase base para todos los eventos de dominio',
            LogroDesbloqueadoEvent: 'Evento que se dispara cuando se desbloquea un logro'
        },
        // Repositorios (interfaces)
        repositories: {
            LogroRepository: 'Interfaz para persistir y recuperar logros',
            UsuarioLogroRepository: 'Interfaz para persistir y recuperar relaciones usuario-logro'
        },
        // Bounded Contexts
        boundedContexts: {
            GamificacionBoundedContext: 'Contexto que delimita el dominio de gamificación'
        }
    },
    // CAPA DE APLICACIÓN
    application: {
        // Casos de uso
        useCases: {
            DesbloquearLogro: 'Caso de uso para desbloquear un logro',
            ListarLogrosDeUsuario: 'Caso de uso para listar logros de un usuario'
        },
        // Servicios de aplicación
        services: {
            GamificacionApplicationService: 'Servicio que orquesta los casos de uso'
        },
        // DTOs
        dtos: {
            DesbloquearLogroDto: 'DTO para el caso de uso de desbloquear logro',
            LogroDto: 'DTO para representar un logro',
            UsuarioGamificacionDto: 'DTO para información completa de gamificación del usuario'
        },
        // Eventos de aplicación
        events: {
            EventBus: 'Interfaz para publicar eventos de dominio',
            EventHandler: 'Interfaz para manejar eventos'
        }
    },
    // CAPA DE INFRAESTRUCTURA
    infrastructure: {
        // Adaptadores
        adapters: {
            controllers: {
                GamificacionController: 'Controlador HTTP para endpoints de gamificación',
                GamificacionRouter: 'Router para las rutas de gamificación'
            }
        },
        // Repositorios (implementaciones)
        repositories: {
            LogroPrismaRepository: 'Implementación del repositorio de logros con Prisma',
            UsuarioLogroPrismaRepository: 'Implementación del repositorio de usuario-logro con Prisma'
        },
        // Persistencia
        prisma: {
            schema: 'Esquema de base de datos con Prisma',
            client: 'Cliente de Prisma para acceso a datos'
        },
        // Middleware
        middleware: {
            jwtMiddleware: 'Middleware para autenticación JWT'
        }
    }
};
/**
 * Principios DDD implementados:
 *
 * 1. Ubiquitous Language: Términos como "Logro", "Puntos", "Desbloquear" son consistentes
 * 2. Bounded Contexts: El dominio de gamificación está claramente delimitado
 * 3. Aggregates: UsuarioAggregate es el agregado raíz que mantiene la consistencia
 * 4. Value Objects: IDs, nombres y puntos son objetos de valor inmutables
 * 5. Domain Events: Los eventos de dominio permiten desacoplamiento
 * 6. Repository Pattern: Abstracción de la persistencia
 * 7. Application Services: Orquestación de casos de uso
 * 8. DTOs: Transferencia de datos entre capas
 */ 
//# sourceMappingURL=DDDConfig.js.map