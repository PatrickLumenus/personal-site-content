import { Value } from '@domeniere/value';
import { ProjectDescriptionInterface } from './project-description.interface';
/**
 * ProjectDesctiption
 *
 * The project description.
 */
export declare class ProjectDescription extends Value implements ProjectDescriptionInterface {
    private static readonly SHORT_DESCRIPTION_MAX_LENGTH;
    private readonly _short;
    private readonly _full;
    /**
     * Creates a project description object.
     * @param description the full description.
     * @param short the short description.
     * @throws ProjectDescriptionException when the description is invalid.
     */
    constructor(description: string, short?: string);
    equals(suspect: any): boolean;
    /**
     * full()
     *
     * gets the full description.
     */
    full(): string;
    /**
     * short()
     *
     * gets the short description.
     */
    short(): string;
    serialize(): string;
}
//# sourceMappingURL=project-description.d.ts.map