"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberRequest = void 0;
const value_1 = require("@domeniere/value");
/**
 * SubscriberRequest
 *
 * A subscriber request
 */
class SubscriberRequest extends value_1.Value {
    constructor(name, email) {
        super();
        this._email = email;
        this._name = name;
    }
    /**
     * email()
     *
     * gets the email address.
     */
    email() {
        return this._email;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof SubscriberRequest) {
            const other = suspect;
            isEqual = (this.email().equals(other.email())) && (this.name() === other.name());
        }
        return isEqual;
    }
    /**
     * name()
     *
     * gets the name of the subscriber.
     */
    name() {
        return this._name;
    }
    serialize() {
        return JSON.stringify({
            email: this.email().toString()
        });
    }
}
exports.SubscriberRequest = SubscriberRequest;
