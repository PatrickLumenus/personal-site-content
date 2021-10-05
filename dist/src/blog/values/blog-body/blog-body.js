"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogBody = void 0;
const value_1 = require("@domeniere/value");
/**
* BlogBody
*
* The body of the blog.
*/
class BlogBody extends value_1.Value {
    constructor(content) {
        super();
        this._content = content;
    }
    /**
     * content()
     *
     * gets the content of the body.
     */
    content() {
        return this._content;
    }
    equals(suspect) {
        let isEqaul = false;
        if (suspect instanceof BlogBody) {
            const other = suspect;
            isEqaul = this.content() === other.content();
        }
        return isEqaul;
    }
    serialize() {
        return this.content();
    }
}
exports.BlogBody = BlogBody;
