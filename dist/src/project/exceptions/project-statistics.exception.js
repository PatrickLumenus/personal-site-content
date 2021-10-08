"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStatisticsException = void 0;
const core_1 = require("@swindle/core");
class ProjectStatisticsException extends core_1.BaseException {
    constructor(message = "Project Statistics Error") {
        super(message);
    }
}
exports.ProjectStatisticsException = ProjectStatisticsException;
