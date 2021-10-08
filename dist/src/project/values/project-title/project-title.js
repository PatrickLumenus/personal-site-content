"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTitle = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * ProjectTitle
 *
 * The project title
 */
class ProjectTitle extends value_1.Value {
    /**
     * Creates a ProjectTitle instance.
     * @param value the value of the title.
     * @throws ProjectTitleException when the project title does not meet the requirements.
     */
    constructor(value) {
        super();
        if ((value.length >= ProjectTitle.MINIMUM_TITLE_LENGTH) && (value.length <= ProjectTitle.MAXIMUM_TITLE_LENGTH)) {
            throw new exceptions_well_1.ProjectTitleException();
        }
        this._title = value;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof ProjectTitle) {
            const other = suspect;
            isEqual = this.title() === other.title();
        }
        return isEqual;
    }
    serialize() {
        return this.title();
    }
    /**
     * title()
     *
     * the title
     */
    title() {
        return this._title;
    }
}
exports.ProjectTitle = ProjectTitle;
ProjectTitle.MINIMUM_TITLE_LENGTH = 1;
ProjectTitle.MAXIMUM_TITLE_LENGTH = 60;
