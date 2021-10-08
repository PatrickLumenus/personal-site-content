import { Entity } from '@domeniere/entity';
import { ProjectDescription, ProjectId, ProjectRepository, ProjectTitle, ProjectWebsite } from '../../values/values.well';
import { ProjectContentInterface } from './project-content.interface';
/**
 * ProjectContent
 *
 * Project content.
 */
export declare class ProjectContent extends Entity implements ProjectContentInterface {
    private _description;
    private _repository;
    private _title;
    private _website;
    constructor(id: ProjectId, title: ProjectTitle, description: ProjectDescription, repository: ProjectRepository, website?: ProjectWebsite | null);
    /**
     * desctiption()
     *
     * gets the project description.
     */
    description(): ProjectDescription;
    equals(suspect: any): boolean;
    id(): ProjectId;
    /**
     * repository()
     *
     * gets the project repository.
     */
    repository(): ProjectRepository;
    serializeData(): string;
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