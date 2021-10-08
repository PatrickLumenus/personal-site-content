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
exports.Project = void 0;
const aggregate_1 = require("@domeniere/aggregate");
const common_1 = require("@domeniere/common");
const core_1 = require("@swindle/core");
const values_well_1 = require("../../values/values.well");
/**
 * Project
 *
 * Represents a single project.
 */
class Project extends aggregate_1.TimestampedAggregate {
    constructor(root, statistics = new values_well_1.ProjectStatistics(), version = 1.0, createdOn = core_1.DateTime.Now(), updatedOn = core_1.DateTime.Now(), deletedOn = null) {
        super(root, version, createdOn, updatedOn, deletedOn);
        this._stats = statistics;
    }
    /**
     * desctiption()
     *
     * gets the project description.
     */
    description() {
        return this.root().description();
    }
    equals(suspect) {
        let isEquals = false;
        if (suspect instanceof Project) {
            const other = suspect;
            isEquals = this.id().equals(other.id());
        }
        return isEquals;
    }
    id() {
        return super.id();
    }
    /**
     * incrementBounces()
     *
     * increments the number of bounces.
     * @param amount the amount to increemnt
     */
    incrementBounces(amount = 1.0) {
        this._stats = this.statistics().incrementBounces(Math.floor(amount));
        this.commitStateChanges();
    }
    /**
     * incrementClicks()
     *
     * increments the number of cicks
     * @param amount the amount to increment
     */
    incrementClicks(amount = 1.0) {
        this._stats = this.statistics().incrementClicks(Math.floor(amount));
        this.commitStateChanges();
    }
    /**
     * incrementViews()
     *
     * increments the number of views
     * @param amount the amount to increment
     */
    incrementViews(amount = 1.0) {
        this._stats = this.statistics().incrementViews(Math.floor(amount));
        this.commitStateChanges();
    }
    /**
     * repository()
     *
     * gets the project repository.
     */
    repository() {
        return this.root().repository();
    }
    root() {
        return super.root();
    }
    serializeData() {
        return JSON.stringify({
            statistics: this.statistics().serialize()
        });
    }
    /**
     * statistics()
     *
     * gets the project statistics.
     */
    statistics() {
        return this._stats;
    }
    /**
     * title()
     *
     * gets the project title.
     */
    title() {
        return this.root().title();
    }
    /**
     * website()
     *
     * gets the website.
     */
    website() {
        return this.root().website();
    }
}
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.ProjectStatistics)
], Project.prototype, "_stats", void 0);
exports.Project = Project;
