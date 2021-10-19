"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSubject = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * MessageSubject
 *
 * The message subject.
 */
class MessageSubject extends value_1.Value {
    /**
     * Creates a MessageSubject instance.
     * @param subject the subject.
     * @throws MessageSubjectException when the message subject is invalid.
     */
    constructor(subject) {
        super();
        if (subject.length === 0) {
            throw new exceptions_well_1.MessageSubjectException();
        }
        this._sub = subject;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof MessageSubject) {
            const other = suspect;
            isEqual = this.subject() === other.subject();
        }
        return isEqual;
    }
    serialize() {
        return this.subject();
    }
    /**
     * subject()
     *
     * gets the message subject.
     */
    subject() {
        return this._sub;
    }
}
exports.MessageSubject = MessageSubject;
