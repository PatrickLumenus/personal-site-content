import { Value } from '@domeniere/value';
import { CoverImageInterface } from './cover-image.interface';
/**
 * CoverImage
 *
 * The cover image for a blog post
 */
export declare class CoverImage extends Value implements CoverImageInterface {
    private readonly _source;
    private readonly _height;
    private readonly _width;
    private readonly _contentType;
    private readonly _description;
    private readonly _size;
    constructor(source: URL, contentType?: string, description?: string, width?: number, height?: number, size?: number);
    /**
     * contentType()
     *
     * gets the cover image content type.
     */
    contentType(): string;
    /**
     * description()
     *
     * gets the cover image description.
     */
    description(): string;
    equals(suspect: any): boolean;
    /**
     * hieght()
     *
     * gets the cover image height in pixels.
     */
    height(): number;
    serialize(): string;
    /**
     * size()
     *
     * gets the file size of the image in bytes.
     */
    size(): number;
    /**
     * source()
     *
     * gets the image source URL.
     */
    source(): URL;
    /**
     * width()
     *
     * gets the width of the cover image in pixels.
     */
    width(): number;
}
//# sourceMappingURL=cover-image.d.ts.map