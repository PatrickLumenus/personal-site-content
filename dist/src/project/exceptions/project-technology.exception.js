"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTechnologyException = void 0;
const core_1 = require("@swindle/core");
class ProjectTechnologyException extends core_1.BaseException {
    constructor(message = "Project Technology Error") {
        super(message);
    }
}
exports.ProjectTechnologyException = ProjectTechnologyException;
