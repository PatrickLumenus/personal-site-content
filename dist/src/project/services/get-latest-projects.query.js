"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLatestProjectsQuery = void 0;
const service_1 = require("@domeniere/service");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * GetLatestProjectsQuery
 *
 * Gets the latest projects.
 */
class GetLatestProjectsQuery extends service_1.Query {
    constructor(projectsRepository) {
        super();
        this.projectsRepository = projectsRepository;
    }
    /**
     * execute()
     *
     * executes the operation.
     * @param count the number of projects to return.
     * @returns The latest projects.
     * @throws ProjectsRepositoryException when there is an issue with the repository.
     * @throws ProjectNotFoundException when the projects cannot be found.
     */
    async execute(count, offset) {
        try {
            const projects = await this.projectsRepository.getLatestProjects(count, offset);
            if (projects.length === 0) {
                throw new exceptions_well_1.ProjectNotFoundException();
            }
            return projects;
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
exports.GetLatestProjectsQuery = GetLatestProjectsQuery;
