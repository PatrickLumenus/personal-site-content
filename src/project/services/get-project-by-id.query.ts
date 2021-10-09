import { Query } from '@domeniere/service';
import { Project } from '../aggregates/aggregates.well';
import { 
    ProjectNotFoundException, 
    ProjectsRepositoryException 
} from '../exceptions/exceptions.well';
import { ProjectsRepository } from '../repositories/repositories.well';
import { ProjectId } from '../values/values.well';

/**
 * GetProjectByIdQuery
 * 
 * Gets a Project by its id.
 */

export class GetProjectByIdQuery extends Query {

    private readonly projectsRepository: ProjectsRepository;

    constructor(projectsRepositry: ProjectsRepository) {
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

    public async execute(id: ProjectId): Promise<Project> {
        try {
            const project = await this.projectsRepository.findById(id);

            if (!project) {
                throw new ProjectNotFoundException();
            }

            return project;
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