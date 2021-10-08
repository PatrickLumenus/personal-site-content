import { State } from '@domeniere/common';
import { Entity } from '@domeniere/entity';
import { 
    ProjectDescription, 
    ProjectId, 
    ProjectRepository,
    ProjectTitle,
    ProjectWebsite
} from '../../values/values.well';
import { ProjectContentInterface } from './project-content.interface';

/**
 * ProjectContent
 * 
 * Project content.
 */

 export class ProjectContent extends Entity implements ProjectContentInterface {

    @State()
    private _description: ProjectDescription;

    @State()
    private _repository: ProjectRepository;

    @State()
    private _title: ProjectTitle;

    @State()
    private _website: ProjectWebsite|null;

    constructor(
        id: ProjectId,
        title: ProjectTitle,
        description: ProjectDescription,
        repository: ProjectRepository,
        website: ProjectWebsite|null = null
    ) {
        super(id);
        this._description = description;
        this._repository = repository;
        this._title = title;
        this._website = website;
    }

     /**
      * desctiption()
      * 
      * gets the project description.
      */

    public description(): ProjectDescription {
        return this._description;
    }

    public equals(suspect: any): boolean {
        let isEquals = false;

        if (suspect instanceof ProjectContent) {
            const other = suspect as ProjectContent;
            isEquals = this.id().equals(other.id());
        }

        return isEquals;
    }

    public id(): ProjectId {
        return super.id() as ProjectId;
    }

     /**
      * repository()
      * 
      * gets the project repository.
      */

    public repository(): ProjectRepository {
        return this._repository;
    }

    public serializeData(): string {
        return JSON.stringify({
            title: this.title().serialize(),
            description: this.description().serialize(),
            repository: this.repository().serialize(),
            website: this.website() ? this.website()?.serialize() : ""
        });
    }

     /**
      * title()
      * 
      * gets the project title.
      */

    public title(): ProjectTitle {
        return this._title;
    }

     /**
      * website()
      * 
      * gets the website.
      */

    public website(): ProjectWebsite | null {
        return this._website;
    }
}