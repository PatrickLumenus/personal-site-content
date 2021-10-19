import { Data } from '@domeniere/dto';
import { MethodUndefinedException } from '@swindle/core';


export class ProjectData extends Data {

    public readonly id: string;
    public readonly title: string;
    public readonly description: string;
    public readonly short_description: string;
    public readonly repository: URL;
    public readonly technologies: string[];
    public readonly website: URL|null;
    public readonly logo: URL|null;


    constructor(
        id: string,
        title: string,
        description: string,
        short_description: string,
        repository: URL,
        logo: URL|null = null,
        technologies: string[] = [],
        website: URL|null = null,
    ) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.short_description = short_description;
        this.repository = repository;
        this.technologies = technologies;
        this.website = website;
        this.logo = logo;
    }

    public serialize(): string {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            description: this.description,
            short_description: this.short_description,
            logo: this.logo ? this.logo.toString() : '',
            repository: this.repository.toString(),
            technologies: this.technologies,
            website: this.website ? this.website.toString() : ""
        });
    }
}