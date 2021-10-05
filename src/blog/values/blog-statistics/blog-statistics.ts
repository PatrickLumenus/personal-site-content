import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { BlogStaticsException } from '../../exceptions/exceptions.well';
import { BlogStatisticsInterface } from './blog-statistics.interface';

/**
 * BlogStatistics
 * 
 * The statistics and engagement for a single blog post.
 */

export class BlogStatistics extends Value implements BlogStatisticsInterface {

    private readonly _bounces: number;
    private readonly _clicks: number;
    private readonly _views: number;

    /**
     * Crates an instance of BlogStatistics
     * @param bounces the number of bounces
     * @param clicks the number of clicks
     * @param views the number of views.
     * @throws BlogStatisticsException when the stat values are invalid.
     */
    constructor(
        bounces: number = 0,
        clicks: number = 0,
        views: number = 0,
    ) {
        super();

        // a few sanity checks
        if (
            (clicks < 0) ||
            (bounces < 0) ||
            (views < 0) ||
            (bounces > clicks) || 
            (views > clicks) || 
            ((views + bounces) !== clicks)
        ) {
            throw new BlogStaticsException();
        }
        this._clicks = clicks;
        this._bounces = bounces;
        this._views = views;
    }


    /**
     * bounces()
     * 
     * Gets the number of bounces on a blog post.
     */

    public bounces(): number {
        return this._bounces;
    }

    /**
     * clicks()
     * 
     * gets the number of clicks on a Blog Post
     */

    public clicks(): number {
        return this._clicks;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof BlogStatistics) {
            const other = suspect as BlogStatistics;
            isEqual = (
                (this.bounces() === other.bounces()) &&
                (this.clicks() === other.clicks()) &&
                (this.views() === other.views())
            );
        }

        return isEqual;
    }

    /**
     * incrementBounces()
     * 
     * increments the bounces by the specified amount.
     * @param amount the amount to increment
     */

    public incrementBounces(amount: number): BlogStatistics {
        return new BlogStatistics(
            this.bounces() + amount,
            this.clicks(),
            this.views(),
        );
    }

    /**
     * incrementClicks()
     * 
     * increments the number of clicks on the blog post.
     * @param amount the amount to increment
     */

    public incrementClicks(amount: number): BlogStatistics {
        return new BlogStatistics(
            this.bounces(),
            this.clicks() + amount,
            this.views(),
        );
    }

    /**
     * incrementViews()
     * 
     * increment the number of views by the specified amount
     * @param amount the number of views to increment by.
     */

    public incrementViews(amount: number): BlogStatistics {
        return new BlogStatistics(
            this.bounces(),
            this.clicks(),
            this.views() + amount,
        );
    }

    public serialize(): string {
        return JSON.stringify({
            bounces: this.bounces().toString(),
            clicks: this.clicks().toString(),
            views: this.views().toString()
        });
    }

    /**
     * views()
     * 
     * gets the number of views on a blog page.
     */

    public views(): number {
        return this._views;
    }
}