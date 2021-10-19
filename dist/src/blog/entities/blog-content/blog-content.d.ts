import { Entity } from '@domeniere/entity';
import { BlogBody, BlogId, BlogSummary, BlogTitle, CoverImage } from '../../values/values.well';
import { BlogContentInterface } from './blog-content.interface';
/**
 * BlogContent
 *
 * The blog content.
 */
export declare class BlogContent extends Entity implements BlogContentInterface {
    private _body;
    private _coverImage;
    private _summary;
    private _title;
    constructor(id: BlogId, title: BlogTitle, body: BlogBody, summary: BlogSummary, cover: CoverImage);
    /**
     * body()
     *
     * gets the blog body.
     */
    body(): BlogBody;
    /**
     * coverImage()
     *
     * gets the cover cover image.
     */
    coverImage(): CoverImage;
    equals(suspect: any): boolean;
    serializeData(): string;
    /**
     * summary()
     *
     * gets the blog summary.
     */
    summary(): BlogSummary;
    /**
    * title()
    *
    * gets the title.
    */
    title(): BlogTitle;
}
//# sourceMappingURL=blog-content.d.ts.map