"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDescription = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * ProjectDesctiption
 *
 * The project description.
 */
class ProjectDescription extends value_1.Value {
    /**
     * Creates a project description object.
     * @param description the full description.
     * @param short the short description.
     * @throws ProjectDescriptionException when the description is invalid.
     */
    constructor(description, short = "") {
        super();
        if (!description) {
            throw new exceptions_well_1.ProjectDescriptionException();
        }
        this._full = description;
        // prepare the short description.
        const shortLen = short.length;
        if (shortLen > 0) {
            if (shortLen > ProjectDescription.SHORT_DESCRIPTION_MAX_LENGTH) {
                this._short = short.substr(0, ProjectDescription.SHORT_DESCRIPTION_MAX_LENGTH - 1) + "...";
            }
            else {
                this._short = short;
            }
        }
        else {
            this._short = description.substr(0, ProjectDescription.SHORT_DESCRIPTION_MAX_LENGTH - 1) + "...";
        }
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof ProjectDescription) {
            const other = suspect;
            isEqual = ((this.full() === other.full()) && (this.short() === other.short()));
        }
        return isEqual;
    }
    /**
     * full()
     *
     * gets the full description.
     */
    full() {
        return this._full;
    }
    /**
     * short()
     *
     * gets the short description.
     */
    short() {
        return this._short;
    }
    serialize() {
        return JSON.stringify({
            description: this.full(),
            short: this.short()
        });
    }
}
exports.ProjectDescription = ProjectDescription;
ProjectDescription.SHORT_DESCRIPTION_MAX_LENGTH = 140;
