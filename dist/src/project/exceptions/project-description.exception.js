"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDescriptionException = void 0;
const core_1 = require("@swindle/core");
class ProjectDescriptionException extends core_1.BaseException {
    constructor(message = "Project Description Error") {
        super(message);
    }
}
exports.ProjectDescriptionException = ProjectDescriptionException;
