import { Entity } from '@domeniere/entity';
import { ProjectDescription, ProjectId, ProjectLogo, ProjectRepository, ProjectTitle, ProjectWebsite, Technology } from '../../values/values.well';
import { ProjectContentInterface } from './project-content.interface';
/**
 * ProjectContent
 *
 * Project content.
 */
export declare class ProjectContent extends Entity implements ProjectContentInterface {
    private _description;
    private _repository;
    private _technologies;
    private _title;
    private _website;
    private _logo;
    constructor(id: ProjectId, title: ProjectTitle, description: ProjectDescription, logo: ProjectLogo | null, repository: ProjectRepository, technology?: Technology[], website?: ProjectWebsite | null);
    /**
     * desctiption()
     *
     * gets the project description.
     */
    description(): ProjectDescription;
    equals(suspect: any): boolean;
    id(): ProjectId;
    /**
     * logo()
     *
     * gets the project logo.
     */
    logo(): ProjectLogo | null;
    /**
     * repository()
     *
     * gets the project repository.
     */
    repository(): ProjectRepository;
    serializeData(): string;
    /**
     * technologies()
     *
     * gets the technologies for the project.
     */
    technologies(): Technology[];
    /**
     * title()
     *
     * gets the project title.
     */
    title(): ProjectTitle;
    /**
     * website()
     *
     * gets the website.
     */
    website(): ProjectWebsite | null;
}
//# sourceMappingURL=project-content.d.ts.map