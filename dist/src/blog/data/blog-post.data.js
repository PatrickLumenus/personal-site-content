"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostData = void 0;
const dto_1 = require("@domeniere/dto");
class BlogPostData extends dto_1.Data {
    constructor(id, title, content, summary) {
        super();
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.content = content;
    }
    serialize() {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            content: this.content,
            summary: this.summary
        });
    }
}
exports.BlogPostData = BlogPostData;
