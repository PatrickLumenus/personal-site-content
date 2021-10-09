"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyData = void 0;
const dto_1 = require("@domeniere/dto");
class TechnologyData extends dto_1.Data {
    constructor(tech) {
        super();
        this.technology = tech;
    }
    serialize() {
        return this.technology;
    }
}
exports.TechnologyData = TechnologyData;
