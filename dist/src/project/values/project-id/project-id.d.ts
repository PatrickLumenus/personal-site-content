import { Value } from '@domeniere/value';
import { ProjectIdInterface } from './project-id.interface';
/**
 * ProjectId
 *
 * The project id.
 */
export declare class ProjectId extends Value implements ProjectIdInterface {
    private readonly _id;
    /**
     * Creates a ProjectId instance.
     * @param id the value of the id.
     * @throws ProjectIdException when the project id is invalid.
     */
    constructor(id: string);
    equals(suspect: any): boolean;
    id(): string;
    serialize(): string;
}
//# sourceMappingURL=project-id.d.ts.map