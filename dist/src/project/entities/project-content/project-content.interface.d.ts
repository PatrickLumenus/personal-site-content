import { ProjectDescriptionInterface, ProjectLogoInterface, ProjectRepositoryInterface, ProjectTitleInterface, ProjectWebsiteInterface, TechnologyInterface } from "../../values/values.well";
export interface ProjectContentInterface {
    /**
     * desctiption()
     *
     * gets the project description.
     */
    description(): ProjectDescriptionInterface;
    /**
     * logo()
     *
     * gets the project logo.
     */
    logo(): ProjectLogoInterface | null;
    /**
     * repository()
     *
     * gets the project repository.
     */
    repository(): ProjectRepositoryInterface;
    /**
     * technologies()
     *
     * gets the technologies for the project.
     */
    technologies(): TechnologyInterface[];
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
    website(): ProjectWebsiteInterface | null;
}
//# sourceMappingURL=project-content.interface.d.ts.map