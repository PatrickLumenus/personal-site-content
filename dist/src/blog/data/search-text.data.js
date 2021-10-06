"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchTextData = void 0;
const dto_1 = require("@domeniere/dto");
class SearchTextData extends dto_1.Data {
    constructor(content) {
        super();
        this.content = content;
    }
    serialize() {
        return this.content;
    }
}
exports.SearchTextData = SearchTextData;
