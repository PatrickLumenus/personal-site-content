import { Data } from '@domeniere/dto';
import { ProjectLogoData } from './project-logo.data';
export declare class ProjectData extends Data {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly short_description: string;
    readonly repository: URL;
    readonly technologies: string[];
    readonly website: URL | null;
    readonly logo: ProjectLogoData | null;
    constructor(id: string, title: string, description: string, short_description: string, repository: URL, logo?: ProjectLogoData | null, technologies?: string[], website?: URL | null);
    serialize(): string;
}
//# sourceMappingURL=project.data.d.ts.map