import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { BlogBodyInterface } from './blog-body.interface';

/**
* BlogBody
*
* The body of the blog.
*/

export class BlogBody extends Value implements BlogBodyInterface {

    private readonly _content: string;

    constructor(content: string) {
        super();
        this._content = content;
    }

    /**
     * content()
     * 
     * gets the content of the body.
     */

    public content(): string {
        return this._content;
    }

    public equals(suspect: any): boolean {
        let isEqaul = false;

        if (suspect instanceof BlogBody) {
            const other = suspect as BlogBody;
            isEqaul = this.content() === other.content();
        }

        return isEqaul;
    }

    public serialize(): string {
        return this.content();
    }
}