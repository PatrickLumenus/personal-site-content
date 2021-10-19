"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDataFactory = void 0;
const factory_1 = require("@domeniere/factory");
const data_well_1 = require("../../data/data.well");
class ProjectDataFactory extends factory_1.AbstractFactory {
    constructor() {
        super();
    }
    /**
     * createFromObject()
     *
     * creates a ProjectData object from a Project object.
     * @param object the object to derive from
     */
    createFromObject(object) {
        return new data_well_1.ProjectData(object.id().id(), object.title().title(), object.description().full(), object.description().short(), object.repository().url(), object.logo().source(), object.technologies().map(tech => tech.serialize()), object.website() ? object.website().url() : null);
    }
}
exports.ProjectDataFactory = ProjectDataFactory;
