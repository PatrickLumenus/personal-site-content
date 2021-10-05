import { Value } from '@domeniere/value';
import { BlogTitleException } from '../../exceptions/exceptions.well';
import { BlogTitleInterface } from './blog-title.interface';

/**
 * BlogTitle 
 * 
 * The blog title.
 */

 export class BlogTitle extends Value implements BlogTitleInterface {

    private readonly _title: string;

    /**
     * creates an instance of BlogTitle
     * @param value the value
     * @throws BlogTitleEception when the blog title value is not valid.
     */
    constructor(value: string) {
        super();

        if (!value) {
            throw new BlogTitleException();
        }

        this._title = value;
    }

    public equals(suspect: any): boolean {
        let isEqaual = false;

        if (suspect instanceof BlogTitle) {
            const other = suspect as BlogTitle;
            isEqaual = this.value() === other.value();
        }

        return isEqaual;
    }

    public serialize(): string {
        return this.value();
    }

     /**
      * value()
      * 
      * gets the value of the title
      */

    public value(): string {
        return this._title;
    }
}