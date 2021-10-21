"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectLogo = void 0;
const value_1 = require("@domeniere/value");
/**
 * ProjectLogo
 *
 * The project logo.
 */
class ProjectLogo extends value_1.Value {
    constructor(source = null, description = '', contentType = '', width = 0, height = 0, size = 0) {
        super();
        this._source = source;
        if (this._source) {
            this._contentType = contentType;
            this._height = height;
            this._size = size;
            this._description = description;
            this._width = width;
        }
        else {
            this._contentType = '';
            this._height = 0;
            this._size = 0;
            this._description = '';
            this._width = 0;
        }
    }
    /**
     * contentType()
     *
     * gets the content type
     */
    contentType() {
        return this._contentType;
    }
    /**
     * description()
     *
     * gets a brief description of the logo.
     */
    description() {
        return this._description;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof ProjectLogo) {
            const other = suspect;
            isEqual = this.source() === other.source();
        }
        return isEqual;
    }
    /**
     * height()
     *
     * gets the height in pixels.
     */
    height() {
        return this._height;
    }
    serialize() {
        return JSON.stringify({
            source: this.source() ? this.source().toString() : '',
            content_type: this.contentType(),
            description: this.description(),
            size: this.size(),
            height: this.height(),
            width: this.width()
        });
    }
    /**
     * size()
     *
     * gets the size of the logo, in bytes.
     */
    size() {
        return this._size;
    }
    /**
     * source()
     *
     * gets the source of the project logo.
     */
    source() {
        return this._source;
    }
    /**
     * width()
     *
     * gets the logo width in pixels.
     */
    width() {
        return this._width;
    }
}
exports.ProjectLogo = ProjectLogo;
