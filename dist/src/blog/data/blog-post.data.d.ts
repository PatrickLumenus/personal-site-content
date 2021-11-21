import { Data } from '@domeniere/dto';
import { DateTime } from '@swindle/core';
import { CoverImageData } from './cover-image.data';
export declare class BlogPostData extends Data {
    readonly id: string;
    readonly content: string;
    readonly summary: string;
    readonly title: string;
    readonly cover: CoverImageData | null;
    readonly created_at: DateTime;
    constructor(id: string, title: string, content: string, summary: string, created_at: DateTime, cover?: CoverImageData | null);
    serialize(): string;
}
//# sourceMappingURL=blog-post.data.d.ts.map