"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogIdException = void 0;
const core_1 = require("@swindle/core");
class BlogIdException extends core_1.BaseException {
    constructor(message = "Blog Id Error") {
        super(message);
    }
}
exports.BlogIdException = BlogIdException;
