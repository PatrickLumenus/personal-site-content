"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectWebsite = void 0;
const value_1 = require("@domeniere/value");
/**
 * ProjectWebsite
 *
 * ProjectWebsite represents a project website.
 */
class ProjectWebsite extends value_1.Value {
    constructor(url) {
        super();
        this._url = url;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof ProjectWebsite) {
            const other = suspect;
            isEqual = this.url().toString() === other.url().toString();
        }
        return isEqual;
    }
    serialize() {
        return this.url().toString();
    }
    /**
     * url()
     *
     * url() gets the project website URL.
     */
    url() {
        return this._url;
    }
}
exports.ProjectWebsite = ProjectWebsite;
