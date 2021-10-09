import { Query } from '@domeniere/service';
import { MethodUndefinedException } from '@swindle/core';
import { Project } from '../aggregates/aggregates.well';
import { ProjectNotFoundException, ProjectsRepositoryException } from '../exceptions/exceptions.well';
import { ProjectsRepository } from '../repositories/repositories.well';
import { Technology } from '../values/values.well';

/**
 * GetProjectsByTechnologyQuery()
 * 
 * Gets projects by their technology.
 */

export class GetProjectsByTechnologyQuery extends Query {

    private readonly projectsRepository: ProjectsRepository;

    constructor(projectsRepository: ProjectsRepository) {
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

    public async execute(technology: Technology): Promise<Project[]> {
        try {
            const projects = await this.projectsRepository.findByTechnology(technology);

            if (projects.length == 0) {
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