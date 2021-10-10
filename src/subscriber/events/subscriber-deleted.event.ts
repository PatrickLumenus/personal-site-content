import { DomainEvent } from '@domeniere/event';
import { DateTime, MethodUndefinedException } from '@swindle/core';
import { Subscriber } from '../aggregates/aggregates.well';

/**
 * SubscriberDeleted
 * 
 * An event indicating a subscriber has been deleted.
 */

export class SubscriberDeleted extends DomainEvent {

    private readonly _sub: Subscriber;

    constructor(
        subscriber: Subscriber,
        occuredOn: DateTime = DateTime.Now(), 
        id: string|undefined = undefined
    ) {
        super(occuredOn, id);
        this._sub = subscriber;
    }

    public static EventClassification(): string {
        return 'content';
    }

    public static EventName(): string {
        return 'subscriber-deleted';
    }

    public static EventVersion(): number {
        return 1.0;
    }

    public isError(): boolean {
        return false;
    }

    public serializeData(): string {
        throw new MethodUndefinedException();
    }

    public shouldBeBroadcasted(): boolean {
        return true;
    }

    /**
     * subscriber()
     * 
     * gets the deleted subscriber.
     * @returns the deleted subscriber
     */

    public subscriber(): Subscriber {
        return this._sub;
    }
}