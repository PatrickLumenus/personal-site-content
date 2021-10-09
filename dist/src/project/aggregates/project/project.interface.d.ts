import { ProjectDescriptionInterface, ProjectRepositoryInterface, ProjectStatisticsInterface, ProjectTitleInterface, ProjectWebsiteInterface, TechnologyInterface } from "../../values/values.well";
export interface ProjectInterface {
    /**
     * desctiption()
     *
     * gets the project description.
     */
    description(): ProjectDescriptionInterface;
    /**
     * incrementBounces()
     *
     * increments the number of bounces.
     * @param amount the amount to increemnt
     */
    incrementBounces(amount: number): void;
    /**
     * incrementClicks()
     *
     * increments the number of cicks
     * @param amount the amount to increment
     */
    incrementClicks(amount: number): void;
    /**
     * incrementViews()
     *
     * increments the number of views
     * @param amount the amount to increment
     */
    incrementViews(amount: number): void;
    /**
     * repository()
     *
     * gets the project repository.
     */
    repository(): ProjectRepositoryInterface;
    /**
     * statistics()
     *
     * gets the project statistics.
     */
    statistics(): ProjectStatisticsInterface;
    /**
     * technologies()
     *
     * gets the technologies.
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
//# sourceMappingURL=project.interface.d.ts.map