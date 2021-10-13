import { Command } from '@domeniere/service';
import { DomainEvent } from '@domeniere/event';
import { ErrorHandlerServiceFailed } from './../events/events.well';

/**
 * HandleErrorEventCommand
 * 
 * A catch-all error handler.
 */

export abstract class HandleErrorEventsCommand extends Command {

    constructor() {
        super();
    }

    /**
     * execute()
     * 
     * executes the operation. 
     * @param event the error event.
     */
    
    public async execute(event: DomainEvent): Promise<void> {
        if (event instanceof ErrorHandlerServiceFailed) {
            await this.onServiceFailure((event as ErrorHandlerServiceFailed).error());
        }
        else {
            try {
                await this.handleError(event);
            }
            catch(e) {
                await this.emit(new ErrorHandlerServiceFailed(e as Error));
            }
        }
    }

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