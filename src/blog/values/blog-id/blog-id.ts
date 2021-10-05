import { Value } from '@domeniere/value';
import { BlogIdException } from '../../exceptions/exceptions.well';
import { BlogIdInterface } from './blog-id.interface';

/**
 * BlogId
 * 
 * The Identifier of the blog. 
 */

 export class BlogId extends Value implements BlogIdInterface {

    private readonly _value: string;

    constructor(value: string) {
        super();

        if (!value) {
            throw new BlogIdException();
        }
        this._value = value;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof BlogId) {
            const other = suspect as BlogId;
            isEqual = this.id() === other.id();
        }

        return isEqual;
    }

    public id(): string {
        return this._value;
    }

    public serialize(): string {
        return this.id();
    }
}