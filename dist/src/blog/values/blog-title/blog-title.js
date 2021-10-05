"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogTitle = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * BlogTitle
 *
 * The blog title.
 */
class BlogTitle extends value_1.Value {
    /**
     * creates an instance of BlogTitle
     * @param value the value
     * @throws BlogTitleEception when the blog title value is not valid.
     */
    constructor(value) {
        super();
        if (!value) {
            throw new exceptions_well_1.BlogTitleException();
        }
        this._title = value;
    }
    equals(suspect) {
        let isEqaual = false;
        if (suspect instanceof BlogTitle) {
            const other = suspect;
            isEqaual = this.value() === other.value();
        }
        return isEqaual;
    }
    serialize() {
        return this.value();
    }
    /**
     * value()
     *
     * gets the value of the title
     */
    value() {
        return this._title;
    }
}
exports.BlogTitle = BlogTitle;
