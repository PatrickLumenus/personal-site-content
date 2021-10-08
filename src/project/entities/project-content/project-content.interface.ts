import { 
    ProjectDescriptionInterface, 
    ProjectRepositoryInterface, 
    ProjectTitleInterface,
    ProjectWebsiteInterface
} from "../../values/values.well";


export interface ProjectContentInterface {
    
    /**
     * desctiption()
     * 
     * gets the project description.
     */

    description(): ProjectDescriptionInterface;

    /**
     * repository()
     * 
     * gets the project repository.
     */

    repository(): ProjectRepositoryInterface;

    /**
     * title()
     * 
     * gets the project title.
     */

    title(): ProjectTitleInterface;

    /**
     * website()
     * 
     * gets the website.
     */
    
    website(): ProjectWebsiteInterface|null;
}