

export interface BlogSummaryInterface {
    
    /**
     * truncated()
     * 
     * Determines if the blog summary is truncated.
     */

    truncated(): boolean;

    /**
     * value()
     * 
     * the content of the summary.
     */
    
    value(): string;
}