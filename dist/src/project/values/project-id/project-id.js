"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectId = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("../../exceptions/exceptions.well");
/**
 * ProjectId
 *
 * The project id.
 */
class ProjectId extends value_1.Value {
    /**
     * Creates a ProjectId instance.
     * @param id the value of the id.
     * @throws ProjectIdException when the project id is invalid.
     */
    constructor(id) {
        super();
        if (!id) {
            throw new exceptions_well_1.ProjectIdException();
        }
        this._id = id;
    }
    equals(suspect) {
        let isEqqual = false;
        if (suspect instanceof ProjectId) {
            const other = suspect;
            isEqqual = this.id() === other.id();
        }
        return isEqqual;
    }
    id() {
        return this._id;
    }
    serialize() {
        return this.id();
    }
}
exports.ProjectId = ProjectId;
