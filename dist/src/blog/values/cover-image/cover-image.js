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
    constructor(source, contentType = '', description = '', width = 0, height = 0, size = 0) {
        super();
        this._source = source;
        this._contentType = contentType;
        this._description = description;
        this._width = width;
        this._height = height;
        this._size = size;
    }
    /**
     * contentType()
     *
     * gets the cover image content type.
     */
    contentType() {
        return this._contentType;
    }
    /**
     * description()
     *
     * gets the cover image description.
     */
    description() {
        return this._description;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof CoverImage) {
            const other = suspect;
            isEqual = ((this.source() === other.source()) &&
                (this.description() === other.description()) &&
                (this.contentType() === other.contentType()) &&
                (this.width() === other.width()) &&
                (this.height() === other.height()) &&
                (this.size() === other.size()));
        }
        return isEqual;
    }
    /**
     * hieght()
     *
     * gets the cover image height in pixels.
     */
    height() {
        return this._height;
    }
    serialize() {
        return JSON.stringify({
            source: this.source().toString(),
            content_type: this.contentType(),
            description: this.description(),
            width: this.width(),
            height: this.height(),
            size: this.size(),
        });
    }
    /**
     * size()
     *
     * gets the file size of the image in bytes.
     */
    size() {
        return this._size;
    }
    /**
     * source()
     *
     * gets the image source URL.
     */
    source() {
        return this._source;
    }
    /**
     * width()
     *
     * gets the width of the cover image in pixels.
     */
    width() {
        return this._width;
    }
}
exports.CoverImage = CoverImage;
