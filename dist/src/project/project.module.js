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
const get_projects_by_technology_query_1 = require("./services/get-projects-by-technology.query");
const services_well_1 = require("./services/services.well");
class ProjectModule extends module_1.Module {
    constructor() {
        super('project');
    }
    createdBindings() {
        // register module bindings here.
        // factories
        this.bindFactory(factories_well_1.ProjectDataFactory, (_) => new factories_well_1.ProjectDataFactory());
        // repositories
        this.bindRepository(repositories_well_1.ProjectsRepository);
        // services
        this.bindService(services_well_1.GetLatestProjectsQuery, module => {
            return new services_well_1.GetLatestProjectsQuery(module.get(repositories_well_1.ProjectsRepository));
        });
        this.bindService(services_well_1.GetProjectByIdQuery, module => {
            return new services_well_1.GetProjectByIdQuery(module.get(repositories_well_1.ProjectsRepository));
        });
        this.bindService(get_projects_by_technology_query_1.GetProjectsByTechnologyQuery, (module) => {
            return new get_projects_by_technology_query_1.GetProjectsByTechnologyQuery(module.get(repositories_well_1.ProjectsRepository));
        });
    }
}
exports.default = ProjectModule;
// module well exports go here.
__exportStar(require("./values/values.well"), exports);
__exportStar(require("./exceptions/exceptions.well"), exports);
__exportStar(require("./entities/entities.well"), exports);
__exportStar(require("./aggregates/aggregates.well"), exports);
__exportStar(require("./repositories/repositories.well"), exports);
__exportStar(require("./data/data.well"), exports);
__exportStar(require("./services/services.well"), exports);
__exportStar(require("./factories/factories.well"), exports);
