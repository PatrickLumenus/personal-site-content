import { Value } from '@domeniere/value';
import { ProjectWebsiteInterface } from './project-website.interface';
/**
 * ProjectWebsite
 *
 * ProjectWebsite represents a project website.
 */
export declare class ProjectWebsite extends Value implements ProjectWebsiteInterface {
    private readonly _url;
    constructor(url: URL);
    equals(suspect: any): boolean;
    serialize(): string;
    /**
     * url()
     *
     * url() gets the project website URL.
     */
    url(): URL;
}
//# sourceMappingURL=project-website.d.ts.map