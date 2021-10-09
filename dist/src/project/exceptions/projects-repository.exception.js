"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRepositoryException = void 0;
const core_1 = require("@swindle/core");
class ProjectsRepositoryException extends core_1.BaseException {
    constructor(message = "Projects Repository Error") {
        super(message);
    }
}
exports.ProjectsRepositoryException = ProjectsRepositoryException;
