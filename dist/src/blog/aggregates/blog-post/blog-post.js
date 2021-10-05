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
exports.BlogPost = void 0;
const aggregate_1 = require("@domeniere/aggregate");
const common_1 = require("@domeniere/common");
const core_1 = require("@swindle/core");
const values_well_1 = require("../../values/values.well");
/**
 * BlogPost
 *
 * A single blog post.
 */
class BlogPost extends aggregate_1.TimestampedAggregate {
    constructor(root, statistics = new values_well_1.BlogStatistics(), version = 1.0, createdOn = core_1.DateTime.Now(), updatedOn = core_1.DateTime.Now(), deletedOn = null) {
        super(root, version, createdOn, updatedOn, deletedOn);
        this._statistics = statistics;
    }
    /**
     * body()
     *
     * gets the blog body.
     */
    body() {
        return this.root().body();
    }
    equals(suspect) {
        let isEquals = false;
        if (suspect instanceof BlogPost) {
            const other = suspect;
            isEquals = this.id().equals(other.id());
        }
        return isEquals;
    }
    /**
     * incrementBounces()
     *
     * increments the number of bounces.
     * @param amount the amount to increemnt
     */
    incrementBounces(amount = 1.0) {
        this._statistics = this.statistics().incrementBounces(Math.floor(amount));
        this.commitStateChanges();
    }
    /**
     * incrementClicks()
     *
     * increments the number of cicks
     * @param amount the amount to increment
     */
    incrementClicks(amount = 1.0) {
        this._statistics = this.statistics().incrementClicks(Math.floor(amount));
        this.commitStateChanges();
    }
    /**
     * incrementViews()
     *
     * increments the number of views
     * @param amount the amount to increment
     */
    incrementViews(amount = 1.0) {
        this._statistics = this.statistics().incrementViews(Math.floor(amount));
        this.commitStateChanges();
    }
    root() {
        return super.root();
    }
    serializeData() {
        return JSON.stringify({
            stats: this.statistics().serialize()
        });
    }
    /**
     * statistics()
     *
     * gets the blog statistics
     */
    statistics() {
        return this._statistics;
    }
    /**
     * summary()
     *
     * gets the blog summary.
     */
    summary() {
        return this.root().summary();
    }
    /**
     * title()
     *
     * gets the blog title
     */
    title() {
        return this.root().title();
    }
}
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.BlogStatistics)
], BlogPost.prototype, "_statistics", void 0);
exports.BlogPost = BlogPost;
