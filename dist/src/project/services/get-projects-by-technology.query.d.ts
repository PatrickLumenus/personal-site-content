import { Query } from '@domeniere/service';
import { Project } from '../aggregates/aggregates.well';
import { ProjectsRepository } from '../repositories/repositories.well';
import { Technology } from '../values/values.well';
/**
 * GetProjectsByTechnologyQuery()
 *
 * Gets projects by their technology.
 */
export declare class GetProjectsByTechnologyQuery extends Query {
    private readonly projectsRepository;
    constructor(projectsRepository: ProjectsRepository);
    /**
     * execute()
     *
     * executes the operation.
     * @param technology the technology to search for.
     * @throws ProejectNotFoundException when the project is not found.
     * @throws ProjectsRepositoryException when there is an issue with the projects repository
     */
    execute(technology: Technology): Promise<Project[]>;
}
//# sourceMappingURL=get-projects-by-technology.query.d.ts.map