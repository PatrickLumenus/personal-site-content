import { AbstractFactory } from '@domeniere/factory';
import { Project } from '../../aggregates/aggregates.well';
import { ProjectData } from '../../data/data.well';
import { ProjectDataFactoryInterface } from './project-data-factory.interface';
export declare class ProjectDataFactory extends AbstractFactory implements ProjectDataFactoryInterface {
    constructor();
    /**
     * createFromObject()
     *
     * creates a ProjectData object from a Project object.
     * @param object the object to derive from
     */
    createFromObject(object: Project): ProjectData;
}
//# sourceMappingURL=project-data.factory.d.ts.map