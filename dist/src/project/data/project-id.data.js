"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectIdData = void 0;
const dto_1 = require("@domeniere/dto");
class ProjectIdData extends dto_1.Data {
    constructor(id) {
        super();
        this.id = id;
    }
    serialize() {
        return this.id;
    }
}
exports.ProjectIdData = ProjectIdData;
