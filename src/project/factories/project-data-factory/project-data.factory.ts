import { AbstractFactory } from '@domeniere/factory';
import { Project } from '../../aggregates/aggregates.well';
import { ProjectData, ProjectLogoData } from '../../data/data.well';
import { ProjectDataFactoryInterface } from './project-data-factory.interface';


export class ProjectDataFactory extends AbstractFactory implements ProjectDataFactoryInterface {
    
    constructor() {
        super();
    }

    /**
     * createFromObject()
     * 
     * creates a ProjectData object from a Project object.
     * @param object the object to derive from
     */

    public createFromObject(object: Project): ProjectData {
        return new ProjectData(
            object.id().id(),
            object.title().title(),
            object.description().full(),
            object.description().short(),
            object.repository().url(),
            object.logo() ? new ProjectLogoData(
                object.logo()!.source()!,
                object.logo()!.description(),
                object.logo()!.contentType(),
                object.logo()!.width(),
                object.logo()!.height(),
                object.logo()!.size(),
            ) : null,
            object.technologies().map(tech => tech.serialize()),
            object.website() ? object.website()!.url() : null
        );
    }
}