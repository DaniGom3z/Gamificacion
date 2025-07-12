import { EventBus } from '../../application/events/EventBus';
import { EventHandler } from '../../application/events/EventHandler';
import { DomainEvent } from '../../domain/events/DomainEvent';

export class InMemoryEventBus implements EventBus {
  private handlers: Map<string, EventHandler[]> = new Map();

  async publish(events: DomainEvent[]): Promise<void> {
    for (const event of events) {
      const eventName = event.getEventName();
      const handlers = this.handlers.get(eventName) || [];
      
      // Ejecutar todos los handlers de forma asíncrona
      const promises = handlers.map(handler => handler.handle(event));
      await Promise.all(promises);
    }
  }

  subscribe(eventName: string, handler: EventHandler): void {
    if (!this.handlers.has(eventName)) {
      this.handlers.set(eventName, []);
    }
    this.handlers.get(eventName)!.push(handler);
  }

  /**
   * Método para limpiar todos los handlers (útil para tests)
   */
  clear(): void {
    this.handlers.clear();
  }

  /**
   * Método para obtener la cantidad de handlers registrados
   */
  getHandlerCount(eventName: string): number {
    return this.handlers.get(eventName)?.length || 0;
  }
} 