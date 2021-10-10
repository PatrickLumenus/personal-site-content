import { DomainEvent } from '@domeniere/event';
import { DateTime } from '@swindle/core';
import { Subscriber } from '../aggregates/aggregates.well';
/**
 * SubscriberDeleted
 *
 * An event indicating a subscriber has been deleted.
 */
export declare class SubscriberDeleted extends DomainEvent {
    private readonly _sub;
    constructor(subscriber: Subscriber, occuredOn?: DateTime, id?: string | undefined);
    static EventClassification(): string;
    static EventName(): string;
    static EventVersion(): number;
    isError(): boolean;
    serializeData(): string;
    shouldBeBroadcasted(): boolean;
    /**
     * subscriber()
     *
     * gets the deleted subscriber.
     * @returns the deleted subscriber
     */
    subscriber(): Subscriber;
}
//# sourceMappingURL=subscriber-deleted.event.d.ts.map