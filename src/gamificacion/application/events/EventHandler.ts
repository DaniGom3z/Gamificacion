import { DomainEvent } from '../../domain/events/DomainEvent';

export interface EventHandler {
  handle(event: DomainEvent): Promise<void>;
} 