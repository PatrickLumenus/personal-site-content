import { Value } from '@domeniere/value';
import { ProjectWebsiteInterface } from './project-website.interface';

/**
 * ProjectWebsite
 * 
 * ProjectWebsite represents a project website.
 */

 export class ProjectWebsite extends Value implements ProjectWebsiteInterface {

    private readonly _url: URL;

    constructor(url: URL) {
        super();
        this._url = url;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof ProjectWebsite) {
            const other = suspect as ProjectWebsite;
            isEqual = this.url().toString() === other.url().toString();
        }

        return isEqual;
    }

    public serialize(): string {
        return this.url().toString();
    }

     /**
      * url()
      * 
      * url() gets the project website URL.
      */

    public url(): URL {
        return this._url;
    }
}