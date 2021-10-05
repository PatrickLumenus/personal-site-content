import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { BlogSummaryInterface } from './blog-summary.interface';

/**
 * BlogSummary
 * 
 * A short summary of the blog.
 */

 export class BlogSummary extends Value implements BlogSummaryInterface {

    private static SUMMARY_LENGTH: number = 120

    private readonly _content: string;
    private readonly _isTruncated: boolean;

    constructor(content: string) {
        super();
        
        if (content.length > BlogSummary.SUMMARY_LENGTH) {
            this._content = content.substr(0, BlogSummary.SUMMARY_LENGTH - 1);
            this._isTruncated = true;
        }
        else {
            this._content = content;
            this._isTruncated = false;
        }
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof BlogSummary) {
            const other = suspect as BlogSummary;
            isEqual = this.value() === other.value();
        }

        return isEqual;
    }

    public serialize(): string {
        return JSON.stringify({
            content: this.value(),
            is_truncated: this._isTruncated
        });
    }

     /**
      * truncated()
      * 
      * Determines if the blog summary is truncated.
      */

    public truncated(): boolean {
        return this._isTruncated;
    }

     /**
      * value()
      * 
      * the content of the summary.
      */

    public value(): string {
        return this._content;
    }
}