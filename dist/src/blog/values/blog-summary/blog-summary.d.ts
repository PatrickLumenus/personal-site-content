import { Value } from '@domeniere/value';
import { BlogSummaryInterface } from './blog-summary.interface';
/**
 * BlogSummary
 *
 * A short summary of the blog.
 */
export declare class BlogSummary extends Value implements BlogSummaryInterface {
    private static SUMMARY_LENGTH;
    private readonly _content;
    private readonly _isTruncated;
    constructor(content: string);
    equals(suspect: any): boolean;
    serialize(): string;
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
//# sourceMappingURL=blog-summary.d.ts.map