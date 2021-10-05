"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogStaticsException = void 0;
const core_1 = require("@swindle/core");
class BlogStaticsException extends core_1.BaseException {
    constructor(message = "Blog Statics Error") {
        super(message);
    }
}
exports.BlogStaticsException = BlogStaticsException;
