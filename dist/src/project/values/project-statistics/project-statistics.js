"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStatistics = void 0;
const value_1 = require("@domeniere/value");
const exceptions_well_1 = require("./../../exceptions/exceptions.well");
/**
 * ProjectStatistics
 *
 * The statistics about a certain project.
 */
class ProjectStatistics extends value_1.Value {
    /**
     * Crates an instance of ProjectStatistics
     * @param bounces the number of bounces
     * @param clicks the number of clicks
     * @param views the number of views.
     * @throws BlogStatisticsException when the stat values are invalid.
     */
    constructor(bounces = 0, clicks = 0, views = 0) {
        super();
        // a few sanity checks
        if ((clicks < 0) ||
            (bounces < 0) ||
            (views < 0) ||
            (bounces > clicks) ||
            (views > clicks) ||
            ((views + bounces) !== clicks)) {
            throw new exceptions_well_1.ProjectStatisticsException();
        }
        this._clicks = clicks;
        this._bounces = bounces;
        this._views = views;
    }
    /**
     * bounces()
     *
     * Gets the number of bounces on a blog post.
     */
    bounces() {
        return this._bounces;
    }
    /**
     * clicks()
     *
     * gets the number of clicks on a Blog Post
     */
    clicks() {
        return this._clicks;
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof ProjectStatistics) {
            const other = suspect;
            isEqual = ((this.bounces() === other.bounces()) &&
                (this.clicks() === other.clicks()) &&
                (this.views() === other.views()));
        }
        return isEqual;
    }
    /**
     * incrementBounces()
     *
     * increments the bounces by the specified amount.
     * @param amount the amount to increment
     */
    incrementBounces(amount) {
        return new ProjectStatistics(this.bounces() + amount, this.clicks(), this.views());
    }
    /**
     * incrementClicks()
     *
     * increments the number of clicks on the blog post.
     * @param amount the amount to increment
     */
    incrementClicks(amount) {
        return new ProjectStatistics(this.bounces(), this.clicks() + amount, this.views());
    }
    /**
     * incrementViews()
     *
     * increment the number of views by the specified amount
     * @param amount the number of views to increment by.
     */
    incrementViews(amount) {
        return new ProjectStatistics(this.bounces(), this.clicks(), this.views() + amount);
    }
    serialize() {
        return JSON.stringify({
            bounces: this.bounces().toString(),
            clicks: this.clicks().toString(),
            views: this.views().toString()
        });
    }
    /**
     * views()
     *
     * gets the number of views on a blog page.
     */
    views() {
        return this._views;
    }
}
exports.ProjectStatistics = ProjectStatistics;
