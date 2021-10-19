import { Data } from '@domeniere/dto';
import { MethodUndefinedException } from '@swindle/core';


export class BlogPostData extends Data {

    public readonly id: string;
    public readonly content: string;
    public readonly summary: string;
    public readonly title: string;
    public cover: URL|null;

    constructor(id: string, title: string, content: string, summary: string, cover: URL|null = null) {
        super();
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.cover = cover;
    }

    public serialize(): string {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            content: this.content,
            summary: this.summary,
            cover: this.cover? this.cover.toString() : ""
        });
    }
}