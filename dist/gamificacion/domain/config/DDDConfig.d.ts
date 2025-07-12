/**
 * Configuración y documentación de la arquitectura DDD
 *
 * Este archivo documenta la estructura Domain-Driven Design implementada
 * en el sistema de gamificación.
 */
export declare const DDD_STRUCTURE: {
    domain: {
        entities: {
            Logro: string;
            UsuarioLogro: string;
        };
        valueObjects: {
            LogroId: string;
            UsuarioId: string;
            LogroNombre: string;
            Puntos: string;
        };
        aggregates: {
            UsuarioAggregate: string;
        };
        services: {
            GamificacionService: string;
        };
        events: {
            DomainEvent: string;
            LogroDesbloqueadoEvent: string;
        };
        repositories: {
            LogroRepository: string;
            UsuarioLogroRepository: string;
        };
        boundedContexts: {
            GamificacionBoundedContext: string;
        };
    };
    application: {
        useCases: {
            DesbloquearLogro: string;
            ListarLogrosDeUsuario: string;
        };
        services: {
            GamificacionApplicationService: string;
        };
        dtos: {
            DesbloquearLogroDto: string;
            LogroDto: string;
            UsuarioGamificacionDto: string;
        };
        events: {
            EventBus: string;
            EventHandler: string;
        };
    };
    infrastructure: {
        adapters: {
            controllers: {
                GamificacionController: string;
                GamificacionRouter: string;
            };
        };
        repositories: {
            LogroPrismaRepository: string;
            UsuarioLogroPrismaRepository: string;
        };
        prisma: {
            schema: string;
            client: string;
        };
        middleware: {
            jwtMiddleware: string;
        };
    };
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
//# sourceMappingURL=DDDConfig.d.ts.map