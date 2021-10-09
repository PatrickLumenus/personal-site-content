import { Value } from '@domeniere/value';
import { TechnologyInterface } from './technology.interface';
/**
 * Technology
 *
 * Represents a name for a technology used in the project.
 */
export declare class Technology extends Value implements TechnologyInterface {
    private readonly _tag;
    /**
     * Creates an instance of Technology.
     * @param tag the tag for the technology.
     * @throws ProjectTechnologyException when the tag is invalid.
     */
    constructor(tag: string);
    equals(suspect: any): boolean;
    serialize(): string;
    /**
     * tag()
     *
     * gets the tag of the technology.
     */
    tag(): string;
}
//# sourceMappingURL=technology.d.ts.map