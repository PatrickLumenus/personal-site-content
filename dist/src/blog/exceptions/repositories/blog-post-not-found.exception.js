"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostNotFoundException = void 0;
const core_1 = require("@swindle/core");
class BlogPostNotFoundException extends core_1.BaseException {
    constructor(message = "Blog Post Not Found Error") {
        super(message);
    }
}
exports.BlogPostNotFoundException = BlogPostNotFoundException;
