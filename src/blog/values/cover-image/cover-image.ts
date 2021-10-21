import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { CoverImageInterface } from './cover-image.interface';

/**
 * CoverImage
 * 
 * The cover image for a blog post
 */

 export class CoverImage extends Value implements CoverImageInterface {

    private readonly _source: URL;
    private readonly _height: number;
    private readonly _width: number;
    private readonly _contentType: string;
    private readonly _description: string;
    private readonly _size: number;

    constructor(
        source: URL,
        contentType: string = '',
        description: string = '',
        width: number = 0,
        height: number = 0,
        size: number = 0,
    ) {
        super();
        this._source = source;
        this._contentType = contentType; 
        this._description = description;
        this._width = width;
        this._height = height;
        this._size = size;
    }

     /**
      * contentType()
      * 
      * gets the cover image content type.
      */

    public contentType(): string {
        return this._contentType;
    }

     /**
      * description()
      * 
      * gets the cover image description.
      */

    public description(): string {
        return this._description;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof CoverImage) {
            const other = suspect as CoverImage;
            isEqual = (
                (this.source() === other.source()) &&
                (this.description() === other.description()) &&
                (this.contentType() === other.contentType()) &&
                (this.width() === other.width()) &&
                (this.height() === other.height()) &&
                (this.size() === other.size())
            );
        }

        return isEqual;
    }

     /**
      * hieght()
      * 
      * gets the cover image height in pixels.
      */

    public height(): number {
        return this._height;
    }

    public serialize(): string {
        return JSON.stringify({
            source: this.source().toString(),
            content_type: this.contentType(),
            description: this.description(),
            width: this.width(),
            height: this.height(),
            size: this.size(),
        });
    }

     /**
      * size()
      * 
      * gets the file size of the image in bytes.
      */

    public size(): number {
        return this._size;
    }

     /**
      * source()
      * 
      * gets the image source URL.
      */

    public source(): URL {
        return this._source;
    }

     /**
      * width()
      * 
      * gets the width of the cover image in pixels.
      */

    public width(): number {
        return this._width;
    }
}