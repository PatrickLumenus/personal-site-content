import { Value } from '@domeniere/value';
import { ProjectTitleInterface } from './project-title.interface';
/**
 * ProjectTitle
 *
 * The project title
 */
export declare class ProjectTitle extends Value implements ProjectTitleInterface {
    private static readonly MINIMUM_TITLE_LENGTH;
    private static readonly MAXIMUM_TITLE_LENGTH;
    private readonly _title;
    /**
     * Creates a ProjectTitle instance.
     * @param value the value of the title.
     * @throws ProjectTitleException when the project title does not meet the requirements.
     */
    constructor(value: string);
    equals(suspect: any): boolean;
    serialize(): string;
    /**
     * title()
     *
     * the title
     */
    title(): string;
}
//# sourceMappingURL=project-title.d.ts.map