import { Repository } from '@domeniere/repository';
import { Project } from '../aggregates/aggregates.well';
import { 
    ProjectId, 
    Technology 
} from '../values/values.well';


export abstract class ProjectsRepository extends Repository {

    constructor() {
        super();
    }

    /**
     * findById()
     * 
     * gets a project by its id.
     * @param id the id of the project to search for.
     * @throws any exception when an error occurs.
     */

    public abstract findById(id: ProjectId): Promise<Project|null>;

    /**
     * findByTechnology()
     * 
     * finds a project by technology stack.
     * @param technology the technology to search by.
     * @throws any exception when there is an error.
     */

    public abstract findByTechnology(technology: Technology): Promise<Project[]>;

    /**
     * getLatestProjects()
     * 
     * gets the latest projects.
     * @param count the number of projects to return.
     * @param offset the offset to skip.
     * @throws any exception when there is an error.
     */

    public abstract getLatestProjects(count: number, offset: number): Promise<Project[]>;

    /**
     * remove()
     * 
     * removes a project.
     * @param project the project to remove.
     * @throws any exception when there is an error.
     */

    public abstract remove(project: Project): Promise<void>;

    /**
     * save()
     * 
     * saves a project.
     * @param project the project to save.
     * @throws any exception when there is an error.
     */

    public abstract save(project: Project): Promise<void>;

    /**
     * size()
     * 
     * gets the number of projects in the repository.
     * @throws any exception when there is an error.
     */

    public abstract size(): Promise<number>;
}