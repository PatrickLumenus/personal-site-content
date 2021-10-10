import { DomainEvent } from '@domeniere/event';
import { DateTime, MethodUndefinedException } from '@swindle/core';
import { Subscriber } from '../aggregates/aggregates.well';

/**
 * SubscriberCreated
 * 
 * An event indicating that a subscriber bas been created.
 */

export class SubscriberCreated extends DomainEvent {

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
        return 'subscriber-created';
    }

    public static EventVersion(): number {
        return 1.0;
    }

    public isError(): boolean {
        return false;
    }

    public serializeData(): string {
        return JSON.stringify({
            subscriber: this.subscriber().serialize()
        });
    }

    public shouldBeBroadcasted(): boolean {
        return true;
    }

    public subscriber(): Subscriber {
        return this._sub;
    }
}