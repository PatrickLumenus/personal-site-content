import { TimestampedAggregate } from '@domeniere/aggregate';
import { State } from '@domeniere/common';
import { Entity } from '@domeniere/entity';
import { DateTime } from '@swindle/core';
import { ProjectContent } from '../../entities/entities.well';
import { 
    ProjectDescription, 
    ProjectId, 
    ProjectLogo, 
    ProjectRepository, 
    ProjectStatistics, 
    ProjectTitle,
    ProjectWebsite,
    Technology
} from '../../values/values.well';
import { ProjectInterface } from './project.interface';

/**
 * Project
 * 
 * Represents a single project.
 */

export class Project extends TimestampedAggregate implements ProjectInterface {

    @State()
    private _stats: ProjectStatistics;

    constructor(
        root: ProjectContent,
        statistics: ProjectStatistics = new ProjectStatistics(),
        version: number|undefined = 1.0,
        createdOn: DateTime = DateTime.Now(),
        updatedOn: DateTime = DateTime.Now(),
        deletedOn: DateTime|null = null
    ) {
        super(root, version, createdOn, updatedOn, deletedOn);
        this._stats = statistics;
    }

    /**
     * desctiption()
     * 
     * gets the project description.
     */

    public description(): ProjectDescription {
        return this.root().description();
    }

    public equals(suspect: any): boolean {

        let isEquals = false;

        if (suspect instanceof Project) {
            const other = suspect as Project;
            isEquals = this.id().equals(other.id());
        }

        return isEquals;
    }

    public id(): ProjectId {
        return super.id() as ProjectId;
    }

    /**
     * incrementBounces()
     * 
     * increments the number of bounces.
     * @param amount the amount to increemnt
     */

    public incrementBounces(amount: number = 1.0): void {
        this._stats = this.statistics().incrementBounces(Math.floor(amount));
        this.commitStateChanges();
    }

    /**
     * incrementClicks()
     * 
     * increments the number of cicks
     * @param amount the amount to increment
     */

    public incrementClicks(amount: number = 1.0): void {
        this._stats = this.statistics().incrementClicks(Math.floor(amount));
        this.commitStateChanges();
    }

    /**
     * incrementViews()
     * 
     * increments the number of views
     * @param amount the amount to increment
     */

    public incrementViews(amount: number = 1.0): void {
        this._stats = this.statistics().incrementViews(Math.floor(amount));
        this.commitStateChanges();
    }

    /**
     * logo()
     * 
     * gets the project logo
     */

    public logo(): ProjectLogo {
        return this.root().logo();
    }

    /**
     * repository()
     * 
     * gets the project repository.
     */

    public repository(): ProjectRepository {
        return this.root().repository();
    }

    protected root(): ProjectContent {
        return super.root() as ProjectContent;
    }

    protected serializeData(): string {
        return JSON.stringify({
            statistics: this.statistics().serialize()
        });
    }

    /**
     * statistics()
     * 
     * gets the project statistics.
     */
    public statistics(): ProjectStatistics {
        return this._stats;
    }

    /**
     * technologies()
     * 
     * gets the technologies.
     */

    public technologies(): Technology[] {
        return this.root().technologies();
    }

    /**
     * title()
     * 
     * gets the project title.
     */

    public title(): ProjectTitle {
        return this.root().title();
    }

    /**
     * website()
     * 
     * gets the website.
     */

    public website(): ProjectWebsite | null {
        return this.root().website();
    }
}