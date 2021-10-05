"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogId = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * BlogId
 *
 * The Identifier of the blog.
 */
class BlogId extends value_1.Value {
    /**
     * creates a BlogId value
     * @param value the value of the id.
     * @throws BlogIdException when the blog id is invalid.
     */
    constructor(value) {
        super();
        if (!value) {
            throw new exceptions_well_1.BlogIdException();
        }
        this._value = value;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof BlogId) {
            const other = suspect;
            isEqual = this.id() === other.id();
        }
        return isEqual;
    }
    id() {
        return this._value;
    }
    serialize() {
        return this.id();
    }
}
exports.BlogId = BlogId;
