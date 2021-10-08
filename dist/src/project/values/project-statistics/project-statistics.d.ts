import { Value } from '@domeniere/value';
import { ProjectStatisticsInterface } from './project-statistics.interface';
/**
 * ProjectStatistics
 *
 * The statistics about a certain project.
 */
export declare class ProjectStatistics extends Value implements ProjectStatisticsInterface {
    private readonly _bounces;
    private readonly _clicks;
    private readonly _views;
    /**
     * Crates an instance of ProjectStatistics
     * @param bounces the number of bounces
     * @param clicks the number of clicks
     * @param views the number of views.
     * @throws BlogStatisticsException when the stat values are invalid.
     */
    constructor(bounces?: number, clicks?: number, views?: number);
    /**
     * bounces()
     *
     * Gets the number of bounces on a blog post.
     */
    bounces(): number;
    /**
     * clicks()
     *
     * gets the number of clicks on a Blog Post
     */
    clicks(): number;
    equals(suspect: any): boolean;
    /**
     * incrementBounces()
     *
     * increments the bounces by the specified amount.
     * @param amount the amount to increment
     */
    incrementBounces(amount: number): ProjectStatistics;
    /**
     * incrementClicks()
     *
     * increments the number of clicks on the blog post.
     * @param amount the amount to increment
     */
    incrementClicks(amount: number): ProjectStatistics;
    /**
     * incrementViews()
     *
     * increment the number of views by the specified amount
     * @param amount the number of views to increment by.
     */
    incrementViews(amount: number): ProjectStatistics;
    serialize(): string;
    /**
     * views()
     *
     * gets the number of views on a blog page.
     */
    views(): number;
}
//# sourceMappingURL=project-statistics.d.ts.map