"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContent = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * MessageContent
 *
 * The content of the message.
 */
class MessageContent extends value_1.Value {
    /**
     * Creates an instance of MessageContent
     * @param content the content.
     * @throws MessageContentException when the content is invalid.
     */
    constructor(content) {
        super();
        if (content.length === 0) {
            throw new exceptions_well_1.MessageContentException();
        }
        this._content = content;
    }
    /**
     * content()
     *
     * gets the content of the message.
     */
    content() {
        return this._content;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof MessageContent) {
            const other = suspect;
            isEqual = this.content() === other.content();
        }
        return isEqual;
    }
    serialize() {
        return this.content();
    }
}
exports.MessageContent = MessageContent;
