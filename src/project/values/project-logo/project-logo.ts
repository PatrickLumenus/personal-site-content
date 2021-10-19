import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { ProjectLogoInterface } from './project-logo.interface';

/**
 * ProjectLogo
 * 
 * The project logo.
 */

 export class ProjectLogo extends Value implements ProjectLogoInterface {

    private readonly _source: URL | null;

    constructor(source: URL | null = null) {
        super();
        this._source = source;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof ProjectLogo) {
            const other = suspect as ProjectLogo;
            isEqual = this.source() === other.source();
        }

        return isEqual;
    }

    public serialize(): string {
        if (this.source()) {
            return this.source()!.toString();
        }
        else {
            return '';
        }
    }

     /**
      * source()
      * 
      * gets the source of the project logo.
      */

    public source(): URL | null {
        return this._source;
    }
}