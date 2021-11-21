import { Query } from '@domeniere/service';
import { Project } from '../aggregates/aggregates.well';
import { ProjectNotFoundException, ProjectsRepositoryException } from '../exceptions/exceptions.well';
import { ProjectsRepository } from '../repositories/repositories.well';

/**
 * GetLatestProjectsQuery
 * 
 * Gets the latest projects.
 */

export class GetLatestProjectsQuery extends Query {

    private readonly projectsRepository: ProjectsRepository; 

    constructor(projectsRepository: ProjectsRepository) {
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

    public async execute(count: number, offset: number): Promise<Project[]> {
        try {
            const projects = await this.projectsRepository.getLatestProjects(count, offset);

            if (projects.length === 0) {
                throw new ProjectNotFoundException();
            }
            return projects;
        }
        catch(e) {
            if (e instanceof ProjectNotFoundException) {
                throw e;
            }
            else {
                throw new ProjectsRepositoryException((e as Error).message);
            }
        }
    }
}