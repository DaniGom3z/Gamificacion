export declare abstract class DomainEvent {
    readonly occurredOn: Date;
    readonly eventId: string;
    constructor();
    abstract getEventName(): string;
    private generateEventId;
}
//# sourceMappingURL=DomainEvent.d.ts.map