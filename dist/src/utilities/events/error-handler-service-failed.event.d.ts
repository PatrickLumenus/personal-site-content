import { DomainEvent } from '@domeniere/event';
import { DateTime } from '@swindle/core';
/**
 * ErrorHandlerServiceFailed
 *
 * Indicates that the error handling service has failed.
 */
export declare class ErrorHandlerServiceFailed extends DomainEvent {
    private _error;
    constructor(error: Error, occuredOn?: DateTime, id?: string | undefined);
    static EventClassification(): string;
    static EventName(): string;
    static EventVersion(): number;
    error(): Error;
    isError(): boolean;
    serializeData(): string;
    shouldBeBroadcasted(): boolean;
}
//# sourceMappingURL=error-handler-service-failed.event.d.ts.map