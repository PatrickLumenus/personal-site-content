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
    constructor(source = null) {
        super();
        this._source = source;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof ProjectLogo) {
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
     * gets the source of the project logo.
     */
    source() {
        return this._source;
    }
}
exports.ProjectLogo = ProjectLogo;
