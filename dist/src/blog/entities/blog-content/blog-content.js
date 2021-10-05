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
exports.BlogContent = void 0;
const entity_1 = require("@domeniere/entity");
const common_1 = require("@domeniere/common");
const values_well_1 = require("../../values/values.well");
/**
 * BlogContent
 *
 * The blog content.
 */
class BlogContent extends entity_1.Entity {
    constructor(id, title, body, summary) {
        super(id);
        this._title = title;
        this._summary = summary;
        this._body = body;
    }
    /**
     * body()
     *
     * gets the blog body.
     */
    body() {
        return this._body;
    }
    equals(suspect) {
        let isEquals = false;
        if (suspect instanceof BlogContent) {
            const other = suspect;
            isEquals = this.id().equals(other.id());
        }
        return isEquals;
    }
    serializeData() {
        return JSON.stringify({
            title: this.title().serialize(),
            body: this.body().serialize(),
            summary: this.summary().serialize(),
        });
    }
    /**
     * summary()
     *
     * gets the blog summary.
     */
    summary() {
        return this._summary;
    }
    /**
    * title()
    *
    * gets the title.
    */
    title() {
        return this._title;
    }
}
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.BlogBody)
], BlogContent.prototype, "_body", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.BlogSummary)
], BlogContent.prototype, "_summary", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.BlogTitle)
], BlogContent.prototype, "_title", void 0);
exports.BlogContent = BlogContent;
