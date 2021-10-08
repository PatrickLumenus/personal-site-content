"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStatistics = void 0;
const value_1 = require("@domeniere/value");
const core_1 = require("@swindle/core");
class ProjectStatistics extends value_1.Value {
    constructor() {
        super();
    }
    equals(suspect) {
        throw new core_1.MethodUndefinedException();
    }
    serialize() {
        throw new core_1.MethodUndefinedException();
    }
}
exports.ProjectStatistics = ProjectStatistics;
