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
const factories_well_1 = require("./factories/factories.well");
const repositories_well_1 = require("./repositories/repositories.well");
const services_well_1 = require("./services/services.well");
class SubscriberModule extends module_1.Module {
    constructor() {
        super('subscriber');
    }
    createdBindings() {
        // register module bindings here.
        // factories
        this.bindFactory(factories_well_1.SubscriberDataFactory, (_) => new factories_well_1.SubscriberDataFactory());
        this.bindFactory(factories_well_1.SubscriberFactory, (_) => new factories_well_1.SubscriberFactory());
        // repositories
        this.bindRepository(repositories_well_1.SubscriberRepository);
        // services
        this.bindService(services_well_1.CreateSubscriberCommand, (module) => {
            return new services_well_1.CreateSubscriberCommand(module.get(factories_well_1.SubscriberFactory), module.get(repositories_well_1.SubscriberRepository));
        });
    }
}
exports.default = SubscriberModule;
// module well exports go here.
__exportStar(require("./values/values.well"), exports);
__exportStar(require("./exceptions/exceptions.well"), exports);
__exportStar(require("./entities/entities.well"), exports);
__exportStar(require("./aggregates/aggregates.well"), exports);
__exportStar(require("./data/data.well"), exports);
__exportStar(require("./factories/factories.well"), exports);
__exportStar(require("./repositories/repositories.well"), exports);
__exportStar(require("./services/services.well"), exports);
__exportStar(require("./events/events.well"), exports);
