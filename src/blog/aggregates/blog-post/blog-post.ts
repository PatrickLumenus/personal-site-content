import { TimestampedAggregate } from '@domeniere/aggregate';
import { State } from '@domeniere/common';
import { DateTime } from '@swindle/core';
import { BlogContent } from '../../entities/entities.well';
import { 
    BlogBody, 
    BlogStatistics, 
    BlogSummary,
    BlogTitle,
    CoverImage
} from '../../values/values.well';
import { BlogPostInterface } from './blog-post.interface';

/**
 * BlogPost
 * 
 * A single blog post.
 */

export class BlogPost extends TimestampedAggregate implements BlogPostInterface {

    @State()
    private _statistics: BlogStatistics;

    constructor(
        root: BlogContent,
        statistics: BlogStatistics = new BlogStatistics(),
        version: number|undefined = 1.0, 
        createdOn: DateTime = DateTime.Now(), 
        updatedOn: DateTime = DateTime.Now(), 
        deletedOn: DateTime|null = null
    ) {
        super(root, version, createdOn, updatedOn, deletedOn);
        this._statistics = statistics;
    }

    /**
     * body()
     * 
     * gets the blog body.
     */

    public body(): BlogBody {
        return this.root().body();
    }

    /**
     * coverImage()
     * 
     * gets the cover image.
     */

    public coverImage(): CoverImage | null {
        return this.root().coverImage();
    }

    public equals(suspect: any): boolean {

        let isEquals = false;

        if (suspect instanceof BlogPost) {
            const other = suspect as BlogPost;
            isEquals = this.id().equals(other.id());
        }

        return isEquals;
    }

    /**
     * incrementBounces()
     * 
     * increments the number of bounces.
     * @param amount the amount to increemnt
     */

    public incrementBounces(amount: number = 1.0): void {
        this._statistics = this.statistics().incrementBounces(Math.floor(amount));
        this.commitStateChanges();
    }

    /**
     * incrementClicks()
     * 
     * increments the number of cicks
     * @param amount the amount to increment
     */

    public incrementClicks(amount: number = 1.0): void {
        this._statistics = this.statistics().incrementClicks(Math.floor(amount));
        this.commitStateChanges();
    }

    /**
     * incrementViews()
     * 
     * increments the number of views
     * @param amount the amount to increment
     */

    public incrementViews(amount: number = 1.0): void {
        this._statistics = this.statistics().incrementViews(Math.floor(amount));
        this.commitStateChanges();
    }

    protected root(): BlogContent {
        return super.root() as BlogContent;
    }

    protected serializeData(): string {
        return JSON.stringify({
            stats: this.statistics().serialize()
        });
    }

    /**
     * statistics()
     * 
     * gets the blog statistics
     */

    public statistics(): BlogStatistics {
        return this._statistics;
    }

    /**
     * summary()
     * 
     * gets the blog summary.
     */

    public summary(): BlogSummary {
        return this.root().summary();
    }

    /**
     * title()
     * 
     * gets the blog title
     */

    public title(): BlogTitle {
        return this.root().title();
    }
}