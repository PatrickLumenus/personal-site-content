"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverImage = void 0;
const value_1 = require("@domeniere/value");
/**
 * CoverImage
 *
 * The cover image for a blog post
 */
class CoverImage extends value_1.Value {
    constructor(source = null) {
        super();
        this._source = source;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof CoverImage) {
            const other = suspect;
            isEqual = this.source() === other.source();
        }
        return isEqual;
    }
    serialize() {
        if (this.source()) {
            return this.source().toString();
        }
        else {
            return '';
        }
    }
    /**
     * source()
     *
     * gets the image source URL.
     */
    source() {
        return this._source;
    }
}
exports.CoverImage = CoverImage;
