import { Data } from '@domeniere/dto';
import { CoverImageData } from './cover-image.data';
export declare class BlogPostData extends Data {
    readonly id: string;
    readonly content: string;
    readonly summary: string;
    readonly title: string;
    cover: CoverImageData | null;
    constructor(id: string, title: string, content: string, summary: string, cover?: CoverImageData | null);
    serialize(): string;
}
//# sourceMappingURL=blog-post.data.d.ts.map