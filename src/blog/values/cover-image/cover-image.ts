import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { CoverImageInterface } from './cover-image.interface';

/**
 * CoverImage
 * 
 * The cover image for a blog post
 */

 export class CoverImage extends Value implements CoverImageInterface {

    private readonly _source: URL|null;

    constructor(source: URL|null = null) {
        super();
        this._source = source;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof CoverImage) {
            const other = suspect as CoverImage;
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
      * gets the image source URL.
      */

    public source(): URL | null {
        return this._source;
    }
}