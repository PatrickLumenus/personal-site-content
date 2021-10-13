import { Command } from '@domeniere/service';
import { DomainEvent } from '@domeniere/event';
/**
 * HandleErrorEventCommand
 *
 * A catch-all error handler.
 */
export declare abstract class HandleErrorEventsCommand extends Command {
    constructor();
    /**
     * execute()
     *
     * executes the operation.
     * @param event the error event.
     */
    execute(event: DomainEvent): Promise<void>;
    /**
     * handleError()
     *
     * handle a regular error event.
     * @param event the error event.
     */
    protected abstract handleError(event: DomainEvent): Promise<void>;
    /**
     * onServiceFailure()
     *
     * executed when the ErrorHandlerService has failed.
     * @note Since this method is the last resort for handling errors, this method MUST NOT fail.
     * @param event the error event.
     */
    protected abstract onServiceFailure(error: Error): Promise<void>;
}
//# sourceMappingURL=handle-error-events.command.d.ts.map