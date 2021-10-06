"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRepositoryException = void 0;
const core_1 = require("@swindle/core");
class BlogRepositoryException extends core_1.BaseException {
    constructor(message = "Blog Repository Error") {
        super(message);
    }
}
exports.BlogRepositoryException = BlogRepositoryException;
