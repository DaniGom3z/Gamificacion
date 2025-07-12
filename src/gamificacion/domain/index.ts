// Entities
export { Logro } from './entities/Logro';
export { UsuarioLogro } from './entities/UsuarioLogro';

// Value Objects
export { LogroId } from './valueObjects/LogroId';
export { UsuarioId } from './valueObjects/UsuarioId';
export { LogroNombre } from './valueObjects/LogroNombre';
export { Puntos } from './valueObjects/Puntos';

// Aggregates
export { UsuarioAggregate } from './aggregates/UsuarioAggregate';

// Domain Services
export { GamificacionService } from './services/GamificacionService';

// Domain Events
export { DomainEvent } from './events/DomainEvent';
export { LogroDesbloqueadoEvent } from './events/LogroDesbloqueadoEvent';

// Repositories (Interfaces)
export { LogroRepository } from './repositories/LogroRepository';
export { UsuarioLogroRepository } from './repositories/UsuarioLogroRepository';

// Bounded Contexts
export { GamificacionBoundedContext } from './boundedContexts/GamificacionBoundedContext';

// Configuration
export { DDD_STRUCTURE } from './config/DDDConfig'; 