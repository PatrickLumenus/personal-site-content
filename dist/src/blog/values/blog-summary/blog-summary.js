"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSummary = void 0;
const value_1 = require("@domeniere/value");
/**
 * BlogSummary
 *
 * A short summary of the blog.
 */
class BlogSummary extends value_1.Value {
    constructor(content) {
        super();
        if (content.length > BlogSummary.SUMMARY_LENGTH) {
            this._content = content.substr(0, BlogSummary.SUMMARY_LENGTH - 1);
            this._isTruncated = true;
        }
        else {
            this._content = content;
            this._isTruncated = false;
        }
    }
    equals(suspect) {
        let isEqual = false;
        if (suspect instanceof BlogSummary) {
            const other = suspect;
            isEqual = this.value() === other.value();
        }
        return isEqual;
    }
    serialize() {
        return JSON.stringify({
            content: this.value(),
            is_truncated: this._isTruncated
        });
    }
    /**
     * truncated()
     *
     * Determines if the blog summary is truncated.
     */
    truncated() {
        return this._isTruncated;
    }
    /**
     * value()
     *
     * the content of the summary.
     */
    value() {
        return this._content;
    }
}
exports.BlogSummary = BlogSummary;
BlogSummary.SUMMARY_LENGTH = 120;
