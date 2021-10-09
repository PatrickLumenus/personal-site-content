"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectByIdQuery = void 0;
const service_1 = require("@domeniere/service");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * GetProjectByIdQuery
 *
 * Gets a Project by its id.
 */
class GetProjectByIdQuery extends service_1.Query {
    constructor(projectsRepositry) {
        super();
        this.projectsRepository = projectsRepositry;
    }
    /**
     * execute()
     *
     * executes the operation.
     * @param id the id to search for.
     * @throws ProjectsRepositoryException when there is an error with the repository.
     * @throws ProjectNotFoundException when the project cannot be found.
     * @throws ProjectsRepositoryException when there is a problem with the projects repository.
     */
    async execute(id) {
        try {
            const project = await this.projectsRepository.findById(id);
            if (!project) {
                throw new exceptions_well_1.ProjectNotFoundException();
            }
            return project;
        }
        catch (e) {
            if (e instanceof exceptions_well_1.ProjectNotFoundException) {
                throw e;
            }
            else {
                throw new exceptions_well_1.ProjectsRepositoryException(e.message);
            }
        }
    }
}
exports.GetProjectByIdQuery = GetProjectByIdQuery;
