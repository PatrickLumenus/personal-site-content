import { Value } from '@domeniere/value';
import { ProjectLogoInterface } from './project-logo.interface';
/**
 * ProjectLogo
 *
 * The project logo.
 */
export declare class ProjectLogo extends Value implements ProjectLogoInterface {
    private readonly _source;
    constructor(source?: URL | null);
    equals(suspect: any): boolean;
    serialize(): string;
    /**
     * source()
     *
     * gets the source of the project logo.
     */
    source(): URL | null;
}
//# sourceMappingURL=project-logo.d.ts.map