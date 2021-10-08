"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("@domeniere/module");
class ProjectModule extends module_1.Module {
    constructor() {
        super('project');
    }
    createdBindings() {
        // register module bindings here.
    }
}
exports.default = ProjectModule;
// module well exports go here.
__exportStar(require("./values/values.well"), exports);
__exportStar(require("./exceptions/exceptions.well"), exports);
__exportStar(require("./entities/entities.well"), exports);
