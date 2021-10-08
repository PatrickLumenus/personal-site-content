"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTitleException = void 0;
const core_1 = require("@swindle/core");
class ProjectTitleException extends core_1.BaseException {
    constructor(message = "Project Title Error") {
        super(message);
    }
}
exports.ProjectTitleException = ProjectTitleException;
