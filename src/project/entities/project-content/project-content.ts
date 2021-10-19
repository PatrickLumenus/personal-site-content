import { State } from '@domeniere/common';
import { Entity } from '@domeniere/entity';
import { 
    ProjectDescription, 
    ProjectId, 
    ProjectLogo, 
    ProjectRepository,
    ProjectTitle,
    ProjectWebsite,
    Technology
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
    private _technologies: Technology[];

    @State()
    private _title: ProjectTitle;

    @State()
    private _website: ProjectWebsite|null;

    @State()
    private _logo: ProjectLogo;

    constructor(
        id: ProjectId,
        title: ProjectTitle,
        description: ProjectDescription,
        logo: ProjectLogo,
        repository: ProjectRepository,
        technology: Technology[] = [],
        website: ProjectWebsite|null = null,
    ) {
        super(id);
        this._description = description;
        this._repository = repository;
        this._technologies = technology;
        this._title = title;
        this._website = website;
        this._logo = logo;
        
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
      * logo()
      * 
      * gets the project logo.
      */

    public logo(): ProjectLogo {
        return this._logo;
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
            logo: this.logo().serialize(),
            repository: this.repository().serialize(),
            technologies: this.technologies().map(tech => tech.serialize()),
            website: this.website() ? this.website()?.serialize() : ""
        });
    }

     /**
      * technologies()
      * 
      * gets the technologies for the project.
      */

    public technologies(): Technology[] {
        return this._technologies.map(tech => tech);
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