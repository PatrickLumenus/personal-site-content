"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogIdData = void 0;
const dto_1 = require("@domeniere/dto");
class BlogIdData extends dto_1.Data {
    constructor(value) {
        super();
        this.value = value;
    }
    serialize() {
        return this.value;
    }
}
exports.BlogIdData = BlogIdData;
