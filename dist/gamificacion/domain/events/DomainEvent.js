"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvent = void 0;
class DomainEvent {
    constructor() {
        this.occurredOn = new Date();
        this.eventId = this.generateEventId();
    }
    generateEventId() {
        return `${this.getEventName()}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}
exports.DomainEvent = DomainEvent;
//# sourceMappingURL=DomainEvent.js.map