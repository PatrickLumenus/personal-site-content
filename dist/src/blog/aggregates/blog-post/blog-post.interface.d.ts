import { BlogBodyInterface, BlogStatisticsInterface, BlogSummaryInterface, BlogTitleInterface, CoverImageInterface } from "../../values/values.well";
export interface BlogPostInterface {
    /**
     * body()
     *
     * gets the blog body.
     */
    body(): BlogBodyInterface;
    /**
     * coverImage()
     *
     * gets the cover image.
     */
    coverImage(): CoverImageInterface;
    /**
     * incrementBounces()
     *
     * increments the number of bounces.
     * @param amount the amount to increemnt
     */
    incrementBounces(amount: number): void;
    /**
     * incrementClicks()
     *
     * increments the number of cicks
     * @param amount the amount to increment
     */
    incrementClicks(amount: number): void;
    /**
     * incrementViews()
     *
     * increments the number of views
     * @param amount the amount to increment
     */
    incrementViews(amount: number): void;
    /**
     * statistics()
     *
     * gets the blog statistics
     */
    statistics(): BlogStatisticsInterface;
    /**
     * summary()
     *
     * gets the blog summary.
     */
    summary(): BlogSummaryInterface;
    /**
     * title()
     *
     * gets the blog title
     */
    title(): BlogTitleInterface;
}
//# sourceMappingURL=blog-post.interface.d.ts.map