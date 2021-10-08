import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { ProjectTitleException } from '../../exceptions/exceptions.well';
import { ProjectTitleInterface } from './project-title.interface';

/**
 * ProjectTitle
 * 
 * The project title
 */

export class ProjectTitle extends Value implements ProjectTitleInterface {

    private static readonly MINIMUM_TITLE_LENGTH = 1;
    private static readonly MAXIMUM_TITLE_LENGTH = 60;

    private readonly _title: string;

    /**
     * Creates a ProjectTitle instance.
     * @param value the value of the title.
     * @throws ProjectTitleException when the project title does not meet the requirements.
     */

    constructor(value: string) {
        super();

        if ((value.length >= ProjectTitle.MINIMUM_TITLE_LENGTH) && (value.length <= ProjectTitle.MAXIMUM_TITLE_LENGTH)) {
            throw new ProjectTitleException();
        }
        this._title = value;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof ProjectTitle) {
            const other = suspect as ProjectTitle;
            isEqual = this.title() === other.title();
        }

        return isEqual;
    }

    public serialize(): string {
        return this.title();
    }

    /**
     * title()
     * 
     * the title
     */

    public title(): string {
        return this._title;
    }
}