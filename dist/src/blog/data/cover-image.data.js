"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverImageData = void 0;
const dto_1 = require("@domeniere/dto");
class CoverImageData extends dto_1.Data {
    constructor(source, description, contentType, width, height, size) {
        super();
        this.source = source;
        this.description = description;
        this.contentType = contentType;
        this.width = width;
        this.height = height;
        this.size = size;
    }
    serialize() {
        return JSON.stringify({
            source: this.source.toString(),
            description: this.description,
            contentType: this.contentType,
            width: this.width,
            height: this.height,
            size: this.size,
        });
    }
}
exports.CoverImageData = CoverImageData;
