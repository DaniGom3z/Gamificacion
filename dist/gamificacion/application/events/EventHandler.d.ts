import { DomainEvent } from '../../domain/events/DomainEvent';
export interface EventHandler {
    handle(event: DomainEvent): Promise<void>;
}
//# sourceMappingURL=EventHandler.d.ts.map