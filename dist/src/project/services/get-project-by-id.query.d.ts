import { Query } from '@domeniere/service';
import { Project } from '../aggregates/aggregates.well';
import { ProjectsRepository } from '../repositories/repositories.well';
import { ProjectId } from '../values/values.well';
/**
 * GetProjectByIdQuery
 *
 * Gets a Project by its id.
 */
export declare class GetProjectByIdQuery extends Query {
    private readonly projectsRepository;
    constructor(projectsRepositry: ProjectsRepository);
    /**
     * execute()
     *
     * executes the operation.
     * @param id the id to search for.
     * @throws ProjectsRepositoryException when there is an error with the repository.
     * @throws ProjectNotFoundException when the project cannot be found.
     * @throws ProjectsRepositoryException when there is a problem with the projects repository.
     */
    execute(id: ProjectId): Promise<Project>;
}
//# sourceMappingURL=get-project-by-id.query.d.ts.map