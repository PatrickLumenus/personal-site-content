import { Data } from '@domeniere/dto';
import { DateTime } from '@swindle/core';
import { CoverImageData } from './cover-image.data';


export class BlogPostData extends Data {

    public readonly id: string;
    public readonly content: string;
    public readonly summary: string;
    public readonly title: string;
    public readonly cover: CoverImageData|null;
    public readonly created_at: DateTime;

    constructor(id: string, title: string, content: string, summary: string, created_at: DateTime, cover: CoverImageData|null = null) {
        super();
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.cover = cover;
        this.created_at = created_at;
    }

    public serialize(): string {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            content: this.content,
            summary: this.summary,
            created_at: this.created_at.toString(),
            cover: this.cover? this.cover.serialize() : ""
        });
    }
}