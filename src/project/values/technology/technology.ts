import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { ProjectTechnologyException } from '../../exceptions/exceptions.well';
import { TechnologyInterface } from './technology.interface';

/**
 * Technology
 * 
 * Represents a name for a technology used in the project.
 */

 export class Technology extends Value implements TechnologyInterface {

    private readonly _tag: string;

    /**
     * Creates an instance of Technology.
     * @param tag the tag for the technology.
     * @throws ProjectTechnologyException when the tag is invalid.
     */
    constructor(tag: string) {
        super();
        const projectTag = tag.trim().toLowerCase();

        if (!projectTag) {
            throw new ProjectTechnologyException()
        }

        this._tag = projectTag;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof Technology) {
            const other = suspect as Technology;
            isEqual = this.tag() === other.tag();
        }

        return isEqual;
    }

    public serialize(): string {
        return this.tag();
    }

     /**
      * tag()
      * 
      * gets the tag of the technology.
      */

    public tag(): string {
        return this._tag;
    }
}