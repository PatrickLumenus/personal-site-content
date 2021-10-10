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
const services_well_1 = require("./services/services.well");
class CommunicationModule extends module_1.Module {
    constructor() {
        super('communication');
    }
    createdBindings() {
        // register module bindings here.
        this.bindServiceInstance(services_well_1.SendWelcomeMessageCommand);
        this.bindServiceInstance(services_well_1.SendGoodbyeMessageCommand);
    }
}
exports.default = CommunicationModule;
// module well exports go here.
__exportStar(require("./services/services.well"), exports);
