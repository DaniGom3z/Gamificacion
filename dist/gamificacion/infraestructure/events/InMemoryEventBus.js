"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryEventBus = void 0;
class InMemoryEventBus {
    constructor() {
        this.handlers = new Map();
    }
    async publish(events) {
        for (const event of events) {
            const eventName = event.getEventName();
            const handlers = this.handlers.get(eventName) || [];
            // Ejecutar todos los handlers de forma asíncrona
            const promises = handlers.map(handler => handler.handle(event));
            await Promise.all(promises);
        }
    }
    subscribe(eventName, handler) {
        if (!this.handlers.has(eventName)) {
            this.handlers.set(eventName, []);
        }
        this.handlers.get(eventName).push(handler);
    }
    /**
     * Método para limpiar todos los handlers (útil para tests)
     */
    clear() {
        this.handlers.clear();
    }
    /**
     * Método para obtener la cantidad de handlers registrados
     */
    getHandlerCount(eventName) {
        return this.handlers.get(eventName)?.length || 0;
    }
}
exports.InMemoryEventBus = InMemoryEventBus;
//# sourceMappingURL=InMemoryEventBus.js.map