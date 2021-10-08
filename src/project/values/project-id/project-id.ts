import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { ProjectIdException } from '../../exceptions/exceptions.well';
import { ProjectIdInterface } from './project-id.interface';

/**
 * ProjectId
 * 
 * The project id.
 */

 export class ProjectId extends Value implements ProjectIdInterface {

    private readonly _id: string;

    /**
     * Creates a ProjectId instance.
     * @param id the value of the id.
     * @throws ProjectIdException when the project id is invalid.
     */
    constructor(id: string) {
        super();

        if (!id) {
            throw new ProjectIdException();
        }
        this._id = id;
    }

    public equals(suspect: any): boolean {
        let isEqqual = false;

        if (suspect instanceof ProjectId) {
            const other = suspect as ProjectId;
            isEqqual = this.id() === other.id();
        }

        return isEqqual;
    }

    public id(): string {
        return this._id;
    }

    public serialize(): string {
        return this.id();
    }
}