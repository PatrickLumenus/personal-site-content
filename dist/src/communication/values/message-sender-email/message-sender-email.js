"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSenderEmail = void 0;
const value_1 = require("@domeniere/value");
/**
 * MessageSenderEmail
 *
 * The message sender email address.
 */
class MessageSenderEmail extends value_1.Value {
    constructor(email) {
        super();
        this._email = email;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof MessageSenderEmail) {
            const other = suspect;
            isEqual = this.id().equals(other.id());
        }
        return isEqual;
    }
    id() {
        return this._email;
    }
    serialize() {
        return this.id().toString();
    }
}
exports.MessageSenderEmail = MessageSenderEmail;
