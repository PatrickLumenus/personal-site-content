"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectContent = void 0;
const common_1 = require("@domeniere/common");
const entity_1 = require("@domeniere/entity");
const values_well_1 = require("../../values/values.well");
/**
 * ProjectContent
 *
 * Project content.
 */
class ProjectContent extends entity_1.Entity {
    constructor(id, title, description, logo, repository, technology = [], website = null) {
        super(id);
        this._description = description;
        this._repository = repository;
        this._technologies = technology;
        this._title = title;
        this._website = website;
        this._logo = logo;
    }
    /**
     * desctiption()
     *
     * gets the project description.
     */
    description() {
        return this._description;
    }
    equals(suspect) {
        let isEquals = false;
        if (suspect instanceof ProjectContent) {
            const other = suspect;
            isEquals = this.id().equals(other.id());
        }
        return isEquals;
    }
    id() {
        return super.id();
    }
    /**
     * logo()
     *
     * gets the project logo.
     */
    logo() {
        return this._logo;
    }
    /**
     * repository()
     *
     * gets the project repository.
     */
    repository() {
        return this._repository;
    }
    serializeData() {
        var _a;
        return JSON.stringify({
            title: this.title().serialize(),
            description: this.description().serialize(),
            logo: this.logo().serialize(),
            repository: this.repository().serialize(),
            technologies: this.technologies().map(tech => tech.serialize()),
            website: this.website() ? (_a = this.website()) === null || _a === void 0 ? void 0 : _a.serialize() : ""
        });
    }
    /**
     * technologies()
     *
     * gets the technologies for the project.
     */
    technologies() {
        return this._technologies.map(tech => tech);
    }
    /**
     * title()
     *
     * gets the project title.
     */
    title() {
        return this._title;
    }
    /**
     * website()
     *
     * gets the website.
     */
    website() {
        return this._website;
    }
}
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.ProjectDescription)
], ProjectContent.prototype, "_description", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.ProjectRepository)
], ProjectContent.prototype, "_repository", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", Array)
], ProjectContent.prototype, "_technologies", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.ProjectTitle)
], ProjectContent.prototype, "_title", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", Object)
], ProjectContent.prototype, "_website", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.ProjectLogo)
], ProjectContent.prototype, "_logo", void 0);
exports.ProjectContent = ProjectContent;
