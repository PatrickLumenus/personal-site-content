import { DomainEvent } from '@domeniere/event';
import { DateTime, MethodUndefinedException } from '@swindle/core';

/**
 * ErrorHandlerServiceFailed
 * 
 * Indicates that the error handling service has failed.
 */

export class ErrorHandlerServiceFailed extends DomainEvent {

    private _error: Error;

    constructor(error: Error, occuredOn: DateTime = DateTime.Now(), id: string|undefined = undefined) {
        super(occuredOn, id);
        this._error = error;
    }

    public static EventClassification(): string {
        return 'content';
    }

    public static EventName(): string {
        return 'error-handler-service-failed';
    }

    public static EventVersion(): number {
        return 1.0;
    }

    public error(): Error {
        return this._error;
    }

    public isError(): boolean {
        return true;
    }

    public serializeData(): string {
        return JSON.stringify({
            error: this.error().toString(),
        });
    }

    public shouldBeBroadcasted(): boolean {
        return false;
    }
}