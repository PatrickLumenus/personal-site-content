"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectNotFoundException = void 0;
const core_1 = require("@swindle/core");
class ProjectNotFoundException extends core_1.BaseException {
    constructor(message = "Project Not Found Error") {
        super(message);
    }
}
exports.ProjectNotFoundException = ProjectNotFoundException;
