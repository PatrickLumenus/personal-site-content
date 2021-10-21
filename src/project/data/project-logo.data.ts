import { Data } from '@domeniere/dto';
import { MethodUndefinedException } from '@swindle/core';

export class ProjectLogoData extends Data {

    public readonly contentType: string;
    public readonly description: string;
    public readonly height: number;
    public readonly size: number;
    public readonly source: URL;
    public readonly width: number;

    constructor(
        source: URL,
        description: string,
        contentType: string,
        width: number,
        height: number,
        size: number,
    ) {
        super();
        this.source = source;
        this.description = description;
        this.contentType = contentType;
        this.width = width;
        this.height = height;
        this.size = size;
    }

    public serialize(): string {
        return JSON.stringify({
            source: this.source.toString(),
            description: this.description,
            contentType: this.contentType,
            width: this.width,
            height: this.height,
            size: this.size,
        });
    }
}