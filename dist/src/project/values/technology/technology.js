"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Technology = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * Technology
 *
 * Represents a name for a technology used in the project.
 */
class Technology extends value_1.Value {
    /**
     * Creates an instance of Technology.
     * @param tag the tag for the technology.
     * @throws ProjectTechnologyException when the tag is invalid.
     */
    constructor(tag) {
        super();
        const projectTag = tag.trim().toLowerCase();
        if (!projectTag) {
            throw new exceptions_well_1.ProjectTechnologyException();
        }
        this._tag = projectTag;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof Technology) {
            const other = suspect;
            isEqual = this.tag() === other.tag();
        }
        return isEqual;
    }
    serialize() {
        return this.tag();
    }
    /**
     * tag()
     *
     * gets the tag of the technology.
     */
    tag() {
        return this._tag;
    }
}
exports.Technology = Technology;
