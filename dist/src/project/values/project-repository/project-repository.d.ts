import { Value } from '@domeniere/value';
import { ProjectRepositoryInterface } from './project-repository.interface';
/**
 * ProjectRepository
 *
 * Represents a Proejct Repository link.
 */
export declare class ProjectRepository extends Value implements ProjectRepositoryInterface {
    private readonly _url;
    constructor(url: URL);
    equals(suspect: any): boolean;
    serialize(): string;
    /**
     * url()
     *
     * gets the URL.
     */
    url(): URL;
}
//# sourceMappingURL=project-repository.d.ts.map