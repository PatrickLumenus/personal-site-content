import { Entity } from '@domeniere/entity';
import { BlogBody, BlogId, BlogSummary, BlogTitle } from '../../values/values.well';
import { BlogContentInterface } from './blog-content.interface';
/**
 * BlogContent
 *
 * The blog content.
 */
export declare class BlogContent extends Entity implements BlogContentInterface {
    private _body;
    private _summary;
    private _title;
    constructor(id: BlogId, title: BlogTitle, body: BlogBody, summary: BlogSummary);
    /**
     * body()
     *
     * gets the blog body.
     */
    body(): BlogBody;
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