import { Query } from '@domeniere/service';
import { Project } from '../aggregates/aggregates.well';
import { ProjectsRepository } from '../repositories/repositories.well';
/**
 * GetLatestProjectsQuery
 *
 * Gets the latest projects.
 */
export declare class GetLatestProjectsQuery extends Query {
    private readonly projectsRepository;
    constructor(projectsRepository: ProjectsRepository);
    /**
     * execute()
     *
     * executes the operation.
     * @param count the number of projects to return.
     * @returns The latest projects.
     * @throws ProjectsRepositoryException when there is an issue with the repository.
     * @throws ProjectNotFoundException when the projects cannot be found.
     */
    execute(count: number, offset: number): Promise<Project[]>;
}
//# sourceMappingURL=get-latest-projects.query.d.ts.map