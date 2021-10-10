"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberId = void 0;
const value_1 = require("@domeniere/value");
const core_1 = require("@swindle/core");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * SubscriberId
 *
 * A subscriber id.
 */
class SubscriberId extends value_1.Value {
    constructor(id) {
        super();
        if (!id) {
            throw new exceptions_well_1.SubscriberIdException();
        }
        this._id = id;
    }
    /**
     * Generate()
     *
     * generates a SubscriberId
     * @returns the generated Subscriber Id.
     */
    static Generate() {
        return new SubscriberId(core_1.UUID.V4().id());
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof SubscriberId) {
            const other = suspect;
            isEqual = this.id() === other.id();
        }
        return isEqual;
    }
    id() {
        return this._id;
    }
    serialize() {
        return this.id();
    }
}
exports.SubscriberId = SubscriberId;
