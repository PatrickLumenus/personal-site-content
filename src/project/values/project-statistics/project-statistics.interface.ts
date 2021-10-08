

export interface ProjectStatisticsInterface {
    
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

    /**
     * incrementBounces()
     * 
     * increments the bounces by the specified amount.
     * @param amount the amount to increment
     */

    incrementBounces(amount: number): ProjectStatisticsInterface;

    /**
     * incrementClicks()
     * 
     * increments the number of clicks on the blog post.
     * @param amount the amount to increment
     */

    incrementClicks(amount: number): ProjectStatisticsInterface;

    /**
     * incrementViews()
     * 
     * increment the number of views by the specified amount
     * @param amount the number of views to increment by.
     */

    incrementViews(amount: number): ProjectStatisticsInterface;

    /**
     * views()
     * 
     * gets the number of views on a blog page.
     */

    views(): number;
}