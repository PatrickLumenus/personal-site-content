import { Value } from '@domeniere/value';
import { ProjectDescriptionException } from '../../exceptions/exceptions.well';
import { ProjectDescriptionInterface } from './project-description.interface';

/**
 * ProjectDesctiption 
 * 
 * The project description.
 */

 export class ProjectDescription extends Value implements ProjectDescriptionInterface {

    private static readonly SHORT_DESCRIPTION_MAX_LENGTH = 140;

    private readonly _short: string;
    private readonly _full: string;

    /**
     * Creates a project description object.
     * @param description the full description.
     * @param short the short description.
     * @throws ProjectDescriptionException when the description is invalid.
     */

    constructor(description: string, short: string = "") {
        super();

        if (!description) {
            throw new ProjectDescriptionException()
        }
        this._full = description;

        // prepare the short description.
        const shortLen = short.length;

        if (shortLen > 0) {
            if (shortLen > ProjectDescription.SHORT_DESCRIPTION_MAX_LENGTH) {
                this._short = short.substr(0, ProjectDescription.SHORT_DESCRIPTION_MAX_LENGTH - 1) + "...";
            }
            else {
                this._short = short;
            }
        }
        else {
            this._short = description.substr(0, ProjectDescription.SHORT_DESCRIPTION_MAX_LENGTH - 1) + "...";
        }

    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof ProjectDescription) {
            const other = suspect as ProjectDescription;
            isEqual = ((this.full() === other.full()) && (this.short() === other.short()));
        }

        return isEqual;
    }

     /**
      * full()
      * 
      * gets the full description.
      */

    public full(): string {
        return this._full;
    }

     /**
      * short()
      * 
      * gets the short description.
      */

    public short(): string {
        return this._short;
    }

    public serialize(): string {
        return JSON.stringify({
            description: this.full(),
            short: this.short()
        });
    }
}