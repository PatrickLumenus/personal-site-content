"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectData = void 0;
const dto_1 = require("@domeniere/dto");
class ProjectData extends dto_1.Data {
    constructor(id, title, description, short_description, repository, technologies = [], website = null) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.short_description = short_description;
        this.repository = repository;
        this.technologies = technologies;
        this.website = website;
    }
    serialize() {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            description: this.description,
            short_description: this.short_description,
            repository: this.repository.toString(),
            technologies: this.technologies,
            website: this.website ? this.website.toString() : ""
        });
    }
}
exports.ProjectData = ProjectData;
