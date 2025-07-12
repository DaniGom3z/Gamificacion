import { EventBus } from '../../application/events/EventBus';
import { EventHandler } from '../../application/events/EventHandler';
import { DomainEvent } from '../../domain/events/DomainEvent';
export declare class InMemoryEventBus implements EventBus {
    private handlers;
    publish(events: DomainEvent[]): Promise<void>;
    subscribe(eventName: string, handler: EventHandler): void;
    /**
     * Método para limpiar todos los handlers (útil para tests)
     */
    clear(): void;
    /**
     * Método para obtener la cantidad de handlers registrados
     */
    getHandlerCount(eventName: string): number;
}
//# sourceMappingURL=InMemoryEventBus.d.ts.map