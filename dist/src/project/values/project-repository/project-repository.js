"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const value_1 = require("@domeniere/value");
/**
 * ProjectRepository
 *
 * Represents a Proejct Repository link.
 */
class ProjectRepository extends value_1.Value {
    constructor(url) {
        super();
        this._url = url;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof ProjectRepository) {
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
     * gets the URL.
     */
    url() {
        return this._url;
    }
}
exports.ProjectRepository = ProjectRepository;
