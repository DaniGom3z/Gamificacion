import { DomainEvent } from '../../domain/events/DomainEvent';
import { EventHandler } from './EventHandler';
export interface EventBus {
    publish(events: DomainEvent[]): Promise<void>;
    subscribe(eventName: string, handler: EventHandler): void;
}
//# sourceMappingURL=EventBus.d.ts.map