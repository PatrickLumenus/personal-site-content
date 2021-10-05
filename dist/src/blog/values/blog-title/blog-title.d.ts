import { Value } from '@domeniere/value';
import { BlogTitleInterface } from './blog-title.interface';
/**
 * BlogTitle
 *
 * The blog title.
 */
export declare class BlogTitle extends Value implements BlogTitleInterface {
    private readonly _title;
    /**
     * creates an instance of BlogTitle
     * @param value the value
     * @throws BlogTitleEception when the blog title value is not valid.
     */
    constructor(value: string);
    equals(suspect: any): boolean;
    serialize(): string;
    /**
     * value()
     *
     * gets the value of the title
     */
    value(): string;
}
//# sourceMappingURL=blog-title.d.ts.map