import { Value } from '@domeniere/value';
import { CoverImageInterface } from './cover-image.interface';
/**
 * CoverImage
 *
 * The cover image for a blog post
 */
export declare class CoverImage extends Value implements CoverImageInterface {
    private readonly _source;
    constructor(source?: URL | null);
    equals(suspect: any): boolean;
    serialize(): string;
    /**
     * source()
     *
     * gets the image source URL.
     */
    source(): URL | null;
}
//# sourceMappingURL=cover-image.d.ts.map