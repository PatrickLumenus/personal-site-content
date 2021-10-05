import { Value } from '@domeniere/value';
import { BlogIdInterface } from './blog-id.interface';
/**
 * BlogId
 *
 * The Identifier of the blog.
 */
export declare class BlogId extends Value implements BlogIdInterface {
    private readonly _value;
    /**
     * creates a BlogId value
     * @param value the value of the id.
     * @throws BlogIdException when the blog id is invalid.
     */
    constructor(value: string);
    equals(suspect: any): boolean;
    id(): string;
    serialize(): string;
}
//# sourceMappingURL=blog-id.d.ts.map