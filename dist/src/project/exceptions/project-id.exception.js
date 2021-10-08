"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectIdException = void 0;
const core_1 = require("@swindle/core");
class ProjectIdException extends core_1.BaseException {
    constructor(message = "Project Id Error") {
        super(message);
    }
}
exports.ProjectIdException = ProjectIdException;
