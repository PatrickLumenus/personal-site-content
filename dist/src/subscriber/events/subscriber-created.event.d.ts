import { DomainEvent } from '@domeniere/event';
import { DateTime } from '@swindle/core';
import { Subscriber } from '../aggregates/aggregates.well';
/**
 * SubscriberCreated
 *
 * An event indicating that a subscriber bas been created.
 */
export declare class SubscriberCreated extends DomainEvent {
    private readonly _sub;
    constructor(subscriber: Subscriber, occuredOn?: DateTime, id?: string | undefined);
    static EventClassification(): string;
    static EventName(): string;
    static EventVersion(): number;
    isError(): boolean;
    serializeData(): string;
    shouldBeBroadcasted(): boolean;
    subscriber(): Subscriber;
}
//# sourceMappingURL=subscriber-created.event.d.ts.map