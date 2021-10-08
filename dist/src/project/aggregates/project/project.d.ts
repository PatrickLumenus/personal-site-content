import { TimestampedAggregate } from '@domeniere/aggregate';
import { DateTime } from '@swindle/core';
import { ProjectContent } from '../../entities/entities.well';
import { ProjectDescription, ProjectId, ProjectRepository, ProjectStatistics, ProjectTitle, ProjectWebsite } from '../../values/values.well';
import { ProjectInterface } from './project.interface';
/**
 * Project
 *
 * Represents a single project.
 */
export declare class Project extends TimestampedAggregate implements ProjectInterface {
    private _stats;
    constructor(root: ProjectContent, statistics?: ProjectStatistics, version?: number | undefined, createdOn?: DateTime, updatedOn?: DateTime, deletedOn?: DateTime | null);
    /**
     * desctiption()
     *
     * gets the project description.
     */
    description(): ProjectDescription;
    equals(suspect: any): boolean;
    id(): ProjectId;
    /**
     * incrementBounces()
     *
     * increments the number of bounces.
     * @param amount the amount to increemnt
     */
    incrementBounces(amount?: number): void;
    /**
     * incrementClicks()
     *
     * increments the number of cicks
     * @param amount the amount to increment
     */
    incrementClicks(amount?: number): void;
    /**
     * incrementViews()
     *
     * increments the number of views
     * @param amount the amount to increment
     */
    incrementViews(amount?: number): void;
    /**
     * repository()
     *
     * gets the project repository.
     */
    repository(): ProjectRepository;
    protected root(): ProjectContent;
    protected serializeData(): string;
    /**
     * statistics()
     *
     * gets the project statistics.
     */
    statistics(): ProjectStatistics;
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
//# sourceMappingURL=project.d.ts.map