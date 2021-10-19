import { TimestampedAggregate } from '@domeniere/aggregate';
import { DateTime } from '@swindle/core';
import { BlogContent } from '../../entities/entities.well';
import { BlogBody, BlogStatistics, BlogSummary, BlogTitle, CoverImage } from '../../values/values.well';
import { BlogPostInterface } from './blog-post.interface';
/**
 * BlogPost
 *
 * A single blog post.
 */
export declare class BlogPost extends TimestampedAggregate implements BlogPostInterface {
    private _statistics;
    constructor(root: BlogContent, statistics?: BlogStatistics, version?: number | undefined, createdOn?: DateTime, updatedOn?: DateTime, deletedOn?: DateTime | null);
    /**
     * body()
     *
     * gets the blog body.
     */
    body(): BlogBody;
    /**
     * coverImage()
     *
     * gets the cover image.
     */
    coverImage(): CoverImage;
    equals(suspect: any): boolean;
    /**
     * incrementBounces()
     *
     * increments the number of bounces.
     * @param amount the amount to increemnt
     */
    incrementBounces(amount?: number): void;
    /**
     * incrementClicks()
     *
     * increments the number of cicks
     * @param amount the amount to increment
     */
    incrementClicks(amount?: number): void;
    /**
     * incrementViews()
     *
     * increments the number of views
     * @param amount the amount to increment
     */
    incrementViews(amount?: number): void;
    protected root(): BlogContent;
    protected serializeData(): string;
    /**
     * statistics()
     *
     * gets the blog statistics
     */
    statistics(): BlogStatistics;
    /**
     * summary()
     *
     * gets the blog summary.
     */
    summary(): BlogSummary;
    /**
     * title()
     *
     * gets the blog title
     */
    title(): BlogTitle;
}
//# sourceMappingURL=blog-post.d.ts.map