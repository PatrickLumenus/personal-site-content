import { Module } from '@domeniere/module';
import { ProjectDataFactory } from './factories/factories.well';
import { ProjectsRepository } from './repositories/repositories.well';
import { GetProjectsByTechnologyQuery } from './services/get-projects-by-technology.query';
import { 
    GetLatestProjectsQuery,
    GetProjectByIdQuery,
} from './services/services.well';


export default class ProjectModule extends Module {
    constructor() {
        super('project');
    }

    protected createdBindings() {
        // register module bindings here.
        // factories
        this.bindFactory(ProjectDataFactory, (_) => new ProjectDataFactory());

        // repositories
        this.bindRepository(ProjectsRepository);

        // services
        this.bindService(GetLatestProjectsQuery, module => {
            return new GetLatestProjectsQuery(module.get(ProjectsRepository));
        });
        this.bindService(GetProjectByIdQuery, module => {
            return new GetProjectByIdQuery(module.get(ProjectsRepository));
        });
        this.bindService(GetProjectsByTechnologyQuery, (module) => {
            return new GetProjectsByTechnologyQuery(module.get(ProjectsRepository));
        });
    }
}

// module well exports go here.
export * from "./values/values.well";
export * from "./exceptions/exceptions.well";
export * from "./entities/entities.well";
export * from "./aggregates/aggregates.well";
export * from "./repositories/repositories.well";
export * from "./data/data.well";
export * from "./services/services.well";
export * from "./factories/factories.well";