"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectsByTechnologyQuery = void 0;
const service_1 = require("@domeniere/service");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * GetProjectsByTechnologyQuery()
 *
 * Gets projects by their technology.
 */
class GetProjectsByTechnologyQuery extends service_1.Query {
    constructor(projectsRepository) {
        super();
        this.projectsRepository = projectsRepository;
    }
    /**
     * execute()
     *
     * executes the operation.
     * @param technology the technology to search for.
     * @throws ProejectNotFoundException when the project is not found.
     * @throws ProjectsRepositoryException when there is an issue with the projects repository
     */
    async execute(technology) {
        try {
            const projects = await this.projectsRepository.findByTechnology(technology);
            if (projects.length == 0) {
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
exports.GetProjectsByTechnologyQuery = GetProjectsByTechnologyQuery;
