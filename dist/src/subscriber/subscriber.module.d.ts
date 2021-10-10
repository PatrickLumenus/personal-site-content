import { Module } from '@domeniere/module';
export default class SubscriberModule extends Module {
    constructor();
    protected createdBindings(): void;
}
export * from "./values/values.well";
export * from "./exceptions/exceptions.well";
export * from "./entities/entities.well";
export * from "./aggregates/aggregates.well";
export * from "./data/data.well";
export * from "./factories/factories.well";
export * from "./repositories/repositories.well";
export * from "./services/services.well";
export * from "./events/events.well";
//# sourceMappingURL=subscriber.module.d.ts.map