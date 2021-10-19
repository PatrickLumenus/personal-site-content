"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMessageSent = void 0;
const event_1 = require("@domeniere/event");
const core_1 = require("@swindle/core");
/**
 * EmailMessageSent
 *
 * An event indicating an email message has been sent.
 */
class EmailMessageSent extends event_1.DomainEvent {
    constructor(message, occuredOn = core_1.DateTime.Now(), id = undefined) {
        super(occuredOn, id);
        this._message = message;
    }
    static EventClassification() {
        return 'content';
    }
    static EventName() {
        return 'email-message-sent';
    }
    static EventVersion() {
        return 1.0;
    }
    isError() {
        return false;
    }
    /**
     * message()
     *
     * gets the message that was sent.
     */
    message() {
        return this._message;
    }
    serializeData() {
        return JSON.stringify({
            message: this.message().serialize(),
        });
    }
    shouldBeBroadcasted() {
        return true;
    }
}
exports.EmailMessageSent = EmailMessageSent;
