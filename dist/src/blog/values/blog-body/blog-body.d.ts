import { Value } from '@domeniere/value';
import { BlogBodyInterface } from './blog-body.interface';
/**
* BlogBody
*
* The body of the blog.
*/
export declare class BlogBody extends Value implements BlogBodyInterface {
    private readonly _content;
    constructor(content: string);
    /**
     * content()
     *
     * gets the content of the body.
     */
    content(): string;
    equals(suspect: any): boolean;
    serialize(): string;
}
//# sourceMappingURL=blog-body.d.ts.map