"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMessageFactory = void 0;
const factory_1 = require("@domeniere/factory");
const aggregates_well_1 = require("../../aggregates/aggregates.well");
const entities_well_1 = require("../../entities/entities.well");
const values_well_1 = require("../../values/values.well");
/**
 * EmailMessageFactory
 *
 * An email message factory.
 */
class EmailMessageFactory extends factory_1.AbstractFactory {
    constructor() {
        super();
    }
    /**
     * createFromData()
     *
     * creates an email message from data.
     * @param data the data to derive.
     * @throws MessageSenderNameException when the sender name is invalid.
     * @throws MessageSubjectException when the message subject is invalid.
     * @throws MessageContentException when the content is invalid.
     */
    createFromData(data) {
        return new aggregates_well_1.EmailMessage(new entities_well_1.SenderDetails(new values_well_1.MessageSenderEmail(data.email), new values_well_1.MessageSenderName(data.name), new values_well_1.MessageSubject(data.subject)), new values_well_1.MessageContent(data.content));
    }
}
exports.EmailMessageFactory = EmailMessageFactory;
