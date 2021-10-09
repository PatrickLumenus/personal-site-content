import { Module } from '@domeniere/module';
import { ProjectsRepository } from './repositories/repositories.well';


export default class ProjectModule extends Module {
    constructor() {
        super('project');
    }

    protected createdBindings() {
        // register module bindings here.

        this.bindRepository(ProjectsRepository);
    }
}

// module well exports go here.
export * from "./values/values.well";
export * from "./exceptions/exceptions.well";
export * from "./entities/entities.well";
export * from "./aggregates/aggregates.well";
export * from "./repositories/repositories.well";