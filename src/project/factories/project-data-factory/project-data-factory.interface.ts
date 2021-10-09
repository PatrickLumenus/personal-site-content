import { Project } from "../../aggregates/aggregates.well";
import { ProjectData } from "../../data/data.well";


export interface ProjectDataFactoryInterface {
    
    /**
     * createFromObject()
     * 
     * creates a ProjectData object from a Project object.
     * @param object the object to derive from
     */

    createFromObject(object: Project): ProjectData;
}