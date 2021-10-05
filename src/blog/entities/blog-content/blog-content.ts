import { Entity } from '@domeniere/entity';
import { State } from '@domeniere/common';
import { BlogBody, BlogId, BlogSummary, BlogTitle } from '../../values/values.well';
import { 
    BlogContentInterface,
} from './blog-content.interface';

/**
 * BlogContent
 * 
 * The blog content.
 */

export class BlogContent extends Entity implements BlogContentInterface {

    @State()
    private _body: BlogBody;

    @State()
    private _summary: BlogSummary;

    @State()
    private _title: BlogTitle;

    constructor(
        id: BlogId,
        title: BlogTitle,
        body: BlogBody,
        summary: BlogSummary,
    ) {
        super(id);
        this._title = title;
        this._summary = summary;
        this._body = body;
    }

    /**
     * body()
     * 
     * gets the blog body.
     */

    public body(): BlogBody {
        return this._body;
    }

    public equals(suspect: any): boolean {
        let isEquals = false;

        if (suspect instanceof BlogContent) {
            const other = suspect as BlogContent;
            isEquals = this.id().equals(other.id());
        }

        return isEquals;
    }

    public serializeData(): string {
        return JSON.stringify({
            title: this.title().serialize(),
            body: this.body().serialize(),
            summary: this.summary().serialize(),
        });
    }

    /**
     * summary()
     * 
     * gets the blog summary.
     */
    public summary(): BlogSummary {
        return this._summary;
    }

    /**
    * title()
    * 
    * gets the title.
    */

    public title(): BlogTitle {
        return this._title;
    }
}