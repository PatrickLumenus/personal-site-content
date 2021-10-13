"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerServiceFailed = void 0;
const event_1 = require("@domeniere/event");
const core_1 = require("@swindle/core");
/**
 * ErrorHandlerServiceFailed
 *
 * Indicates that the error handling service has failed.
 */
class ErrorHandlerServiceFailed extends event_1.DomainEvent {
    constructor(error, occuredOn = core_1.DateTime.Now(), id = undefined) {
        super(occuredOn, id);
        this._error = error;
    }
    static EventClassification() {
        return 'content';
    }
    static EventName() {
        return 'error-handler-service-failed';
    }
    static EventVersion() {
        return 1.0;
    }
    error() {
        return this._error;
    }
    isError() {
        return true;
    }
    serializeData() {
        return JSON.stringify({
            error: this.error().toString(),
        });
    }
    shouldBeBroadcasted() {
        return false;
    }
}
exports.ErrorHandlerServiceFailed = ErrorHandlerServiceFailed;
