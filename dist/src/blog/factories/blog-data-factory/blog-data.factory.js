"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogDataFactory = void 0;
const factory_1 = require("@domeniere/factory");
const data_well_1 = require("../../data/data.well");
class BlogDataFactory extends factory_1.AbstractFactory {
    constructor() {
        super();
    }
    /**
     * createFromObject()
     *
     * creates a blog post data from an object.
     * @param object the object to create from.
     */
    createFromObject(object) {
        return new data_well_1.BlogPostData(object.id().id(), object.title().value(), object.body().content(), object.summary().value(), object.createdOn(), object.coverImage() ?
            new data_well_1.CoverImageData(object.coverImage().source(), object.coverImage().description(), object.coverImage().contentType(), object.coverImage().width(), object.coverImage().height(), object.coverImage().size()) : null);
    }
}
exports.BlogDataFactory = BlogDataFactory;
