import { Module } from '@domeniere/module';
/**
 * The Blog module
 */
export default class BlogModule extends Module {
    constructor();
    protected createdBindings(): void;
}
export * from "./values/values.well";
export * from "./exceptions/exceptions.well";
export * from "./entities/entities.well";
export * from "./aggregates/aggregates.well";
export * from "./repositories/repositories.well";
export * from "./services/services.well";
export * from "./data/data.well";
export * from "./factories/factories.well";
//# sourceMappingURL=blog.module.d.ts.map