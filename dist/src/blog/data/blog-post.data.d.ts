import { Data } from '@domeniere/dto';
export declare class BlogPostData extends Data {
    readonly id: string;
    readonly content: string;
    readonly summary: string;
    readonly title: string;
    constructor(id: string, title: string, content: string, summary: string);
    serialize(): string;
}
//# sourceMappingURL=blog-post.data.d.ts.map