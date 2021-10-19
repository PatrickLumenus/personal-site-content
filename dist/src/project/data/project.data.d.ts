import { Data } from '@domeniere/dto';
export declare class ProjectData extends Data {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly short_description: string;
    readonly repository: URL;
    readonly technologies: string[];
    readonly website: URL | null;
    readonly logo: URL | null;
    constructor(id: string, title: string, description: string, short_description: string, repository: URL, logo?: URL | null, technologies?: string[], website?: URL | null);
    serialize(): string;
}
//# sourceMappingURL=project.data.d.ts.map