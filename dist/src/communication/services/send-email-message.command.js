"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailMessageCommand = void 0;
const service_1 = require("@domeniere/service");
const events_well_1 = require("../events/events.well");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * SendEmailMessageCommand
 *
 * Sends an email message.
 */
class SendEmailMessageCommand extends service_1.Command {
    constructor() {
        super();
    }
    /**
     * exexute()
     *
     * executes the operation.
     * @param message the message to send.
     * @throws FailedToSendMessageException when the message could not be sent.
     */
    async execute(message) {
        try {
            await this.send(message.name().name(), message.email(), message.subject().subject(), message.content().content());
            await this.emit(new events_well_1.EmailMessageSent(message));
        }
        catch (e) {
            throw new exceptions_well_1.FailedToSendMessageException(e.message);
        }
    }
}
exports.SendEmailMessageCommand = SendEmailMessageCommand;
