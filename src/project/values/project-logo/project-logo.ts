import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { ProjectLogoInterface } from './project-logo.interface';

/**
 * ProjectLogo
 * 
 * The project logo.
 */

 export class ProjectLogo extends Value implements ProjectLogoInterface {

    private readonly _contentType: string;
     private readonly _description: string;
    private readonly _height: number;
    private readonly _size: number;
    private readonly _source: URL | null;
    private readonly _width: number;

    constructor(
        source: URL | null = null,
        description: string = '',
        contentType: string = '',
        width: number = 0,
        height: number = 0,
        size: number = 0,
    ) {
        super();
        this._source = source;

        if (this._source) {
            this._contentType = contentType;
            this._height = height;
            this._size = size;
            this._description = description;
            this._width = width;
        }
        else {
            this._contentType = '';
            this._height = 0;
            this._size = 0;
            this._description = '';
            this._width = 0;
        }
    }

     /**
      * contentType()
      * 
      * gets the content type
      */

    public contentType(): string {
        return this._contentType;
    }

     /**
      * description()
      * 
      * gets a brief description of the logo.
      */

    public description(): string {
        return this._description;
    }


    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof ProjectLogo) {
            const other = suspect as ProjectLogo;
            isEqual = this.source() === other.source();
        }

        return isEqual;
    }

     /**
      * height()
      * 
      * gets the height in pixels.
      */

    public height(): number {
        return this._height;
    }

    public serialize(): string {
        return JSON.stringify({
            source: this.source() ? this.source()!.toString() : '',
            content_type: this.contentType(),
            description: this.description(),
            size: this.size(),
            height: this.height(),
            width: this.width()
        });
    }

     /**
      * size()
      * 
      * gets the size of the logo, in bytes.
      */

    public size(): number {
        return this._size;
    }

     /**
      * source()
      * 
      * gets the source of the project logo.
      */

    public source(): URL | null {
        return this._source;
    }

     /**
      * width()
      * 
      * gets the logo width in pixels.
      */

    public width(): number {
        return this._width;
    }
}