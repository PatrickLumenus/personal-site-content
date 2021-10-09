import { Repository } from '@domeniere/repository';
import { Project } from '../aggregates/aggregates.well';
import { ProjectId, Technology } from '../values/values.well';
export declare abstract class ProjectsRepository extends Repository {
    constructor();
    /**
     * findById()
     *
     * gets a project by its id.
     * @param id the id of the project to search for.
     * @throws any exception when an error occurs.
     */
    abstract findById(id: ProjectId): Promise<Project | null>;
    /**
     * findByTechnology()
     *
     * finds a project by technology stack.
     * @param technology the technology to search by.
     * @throws any exception when there is an error.
     */
    abstract findByTechnology(technology: Technology): Promise<Project[]>;
    /**
     * getLatestProjects()
     *
     * gets the latest projects.
     * @param count the number of projects to return.
     * @throws any exception when there is an error.
     */
    abstract getLatestProjects(count: number): Promise<Project[]>;
    /**
     * remove()
     *
     * removes a project.
     * @param project the project to remove.
     * @throws any exception when there is an error.
     */
    abstract remove(project: Project): Promise<void>;
    /**
     * save()
     *
     * saves a project.
     * @param project the project to save.
     * @throws any exception when there is an error.
     */
    abstract save(project: Project): Promise<void>;
    /**
     * size()
     *
     * gets the number of projects in the repository.
     * @throws any exception when there is an error.
     */
    abstract size(): Promise<number>;
}
//# sourceMappingURL=projects.repository.d.ts.map