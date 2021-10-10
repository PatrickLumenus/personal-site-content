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
    constructor(email) {
        super();
        this._email = email;
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
            isEqual = this.email().equals(other.email());
        }
        return isEqual;
    }
    serialize() {
        return JSON.stringify({
            email: this.email().toString()
        });
    }
}
exports.SubscriberRequest = SubscriberRequest;
