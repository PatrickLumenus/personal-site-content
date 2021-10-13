"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErrorEventsCommand = void 0;
const service_1 = require("@domeniere/service");
const events_well_1 = require("./../events/events.well");
/**
 * HandleErrorEventCommand
 *
 * A catch-all error handler.
 */
class HandleErrorEventsCommand extends service_1.Command {
    constructor() {
        super();
    }
    /**
     * execute()
     *
     * executes the operation.
     * @param event the error event.
     */
    async execute(event) {
        if (event instanceof events_well_1.ErrorHandlerServiceFailed) {
            await this.onServiceFailure(event.error());
        }
        else {
            try {
                await this.handleError(event);
            }
            catch (e) {
                await this.emit(new events_well_1.ErrorHandlerServiceFailed(e));
            }
        }
    }
}
exports.HandleErrorEventsCommand = HandleErrorEventsCommand;
