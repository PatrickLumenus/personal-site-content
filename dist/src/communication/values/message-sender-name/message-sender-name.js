"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSenderName = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * MessageSenderName
 *
 * The message sender name.
 */
class MessageSenderName extends value_1.Value {
    /**
     * Creates a MessageSenderName instance.
     * @param name the name
     * @throws MessageSenderNameException when the sender name is invalid.
     */
    constructor(name) {
        super();
        if (name.length === 0) {
            throw new exceptions_well_1.MessageSenderNameException();
        }
        this._name = name;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof MessageSenderName) {
            const other = suspect;
            isEqual = this.name() === other.name();
        }
        return isEqual;
    }
    /**
     * name()
     *
     * gets the name of the message sender.
     */
    name() {
        return this._name;
    }
    serialize() {
        return this.name();
    }
}
exports.MessageSenderName = MessageSenderName;
