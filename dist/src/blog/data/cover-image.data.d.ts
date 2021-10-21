import { Data } from '@domeniere/dto';
export declare class CoverImageData extends Data {
    readonly contentType: string;
    readonly description: string;
    readonly height: number;
    readonly size: number;
    readonly source: URL;
    readonly width: number;
    constructor(source: URL, description: string, contentType: string, width: number, height: number, size: number);
    serialize(): string;
}
//# sourceMappingURL=cover-image.data.d.ts.map