"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberDataFactory = void 0;
const factory_1 = require("@domeniere/factory");
const data_well_1 = require("../../data/data.well");
class SubscriberDataFactory extends factory_1.AbstractFactory {
    constructor() {
        super();
    }
    /**
     * createFromObject()
     *
     * creates a SubscriberData instance from an object.
     * @param object the object to derive from
     */
    createFromObject(object) {
        return new data_well_1.SubscriberData(object.id().id(), object.email().toString());
    }
}
exports.SubscriberDataFactory = SubscriberDataFactory;
