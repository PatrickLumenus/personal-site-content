"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberFactory = void 0;
const factory_1 = require("@domeniere/factory");
const aggregates_well_1 = require("../../aggregates/aggregates.well");
const entities_well_1 = require("../../entities/entities.well");
const values_well_1 = require("../../values/values.well");
class SubscriberFactory extends factory_1.AbstractFactory {
    constructor() {
        super();
    }
    /**
     * createFromRequest()
     *
     * creates a Subscribeer from a request object.
     * @param request the subscriber request to derive from
     */
    createFromRequest(request) {
        return new aggregates_well_1.Subscriber(new entities_well_1.SubscriberProfile(values_well_1.SubscriberId.Generate(), new values_well_1.SubscriberName(request.name()), request.email()));
    }
}
exports.SubscriberFactory = SubscriberFactory;
