import { Value } from '@domeniere/value';
import { ProjectLogoInterface } from './project-logo.interface';
/**
 * ProjectLogo
 *
 * The project logo.
 */
export declare class ProjectLogo extends Value implements ProjectLogoInterface {
    private readonly _contentType;
    private readonly _description;
    private readonly _height;
    private readonly _size;
    private readonly _source;
    private readonly _width;
    constructor(source?: URL | null, description?: string, contentType?: string, width?: number, height?: number, size?: number);
    /**
     * contentType()
     *
     * gets the content type
     */
    contentType(): string;
    /**
     * description()
     *
     * gets a brief description of the logo.
     */
    description(): string;
    equals(suspect: any): boolean;
    /**
     * height()
     *
     * gets the height in pixels.
     */
    height(): number;
    serialize(): string;
    /**
     * size()
     *
     * gets the size of the logo, in bytes.
     */
    size(): number;
    /**
     * source()
     *
     * gets the source of the project logo.
     */
    source(): URL | null;
    /**
     * width()
     *
     * gets the logo width in pixels.
     */
    width(): number;
}
//# sourceMappingURL=project-logo.d.ts.map