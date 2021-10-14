"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberName = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * SubscriberName
 *
 * The name of the subscriber.
 */
class SubscriberName extends value_1.Value {
    /**
     * creates a SubscriberName instance.
     * @param name the name to set.
     * @throws SubscriberNameException when the subscriber name is invalid.
     */
    constructor(name) {
        super();
        if ((name.length < 1) || (name.length > SubscriberName.MAX_LENGTH)) {
            throw new exceptions_well_1.SubscriberNameException();
        }
        this._name = name;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof SubscriberName) {
            const other = suspect;
            isEqual = this.name() === other.name();
        }
        return isEqual;
    }
    /**
     * name()
     *
     * gets the name.
     */
    name() {
        return this._name;
    }
    serialize() {
        return this.name();
    }
}
exports.SubscriberName = SubscriberName;
SubscriberName.MAX_LENGTH = 60;
