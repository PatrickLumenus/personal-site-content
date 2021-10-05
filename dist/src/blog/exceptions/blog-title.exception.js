"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogTitleException = void 0;
const core_1 = require("@swindle/core");
class BlogTitleException extends core_1.BaseException {
    constructor(message = "Blog Title Error") {
        super(message);
    }
}
exports.BlogTitleException = BlogTitleException;
