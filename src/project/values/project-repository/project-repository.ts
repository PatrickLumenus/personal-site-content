import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { ProjectRepositoryInterface } from './project-repository.interface';

/**
 * ProjectRepository
 * 
 * Represents a Proejct Repository link.
 */

export class ProjectRepository extends Value implements ProjectRepositoryInterface {

    private readonly _url: URL;

    constructor(url: URL) {
        super();
        this._url = url;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof ProjectRepository) {
            const other = suspect as ProjectRepository;
            isEqual = this.url().toString() === other.url().toString();
        }

        return isEqual;
    }

    public serialize(): string {
        return this.url().toString();
    }

    /**
     * url()
     * 
     * gets the URL.
     */

    public url(): URL {
        return this._url;
    }
}