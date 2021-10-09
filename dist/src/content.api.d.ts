import { Api } from '@domeniere/core';
import { BlogIdData, BlogPostData, BlogsRepository, SearchTextData } from './blog/blog.module';
import { ContentEventStore } from './content.eventstore';
import { ProjectIdData } from './project/data/project-id.data';
import { ProjectData, ProjectsRepository, TechnologyData } from './project/project.module';
/**
 * ContentApi
 *
 * The content api.
 */
export declare class ContentApi extends Api {
    constructor(blogRepository: BlogsRepository, projectRepository: ProjectsRepository, eventStore: ContentEventStore);
    /**
     * getBlogPostById()
     *
     * gets a blog post bhy its id.
     * @param id the id of the blog to search for.
     * @returns the blog post associated with the id.
     * @throws BlogIdException when the blog id is invalid.
     * @throws BlogRepositoryException when there is a problem with the repository.
     * @throws BlogPostNotFoundException when the posts cannot be found.
     */
    getBlogPostById(id: BlogIdData): Promise<BlogPostData>;
    /**
     * getLatestBlogs()
     *
     * gets the latest blogs.
     * @param count the number of posts to get.
     * @param start the starting position.
     * @returns the latest posts.
     * @throws BlogRepositoryException when there is a problem with the repository.
     */
    getLatestBlogs(count?: number, start?: number): Promise<BlogPostData[]>;
    /**
     * getLatestProjects()
     *
     * gets the latest projects
     * @param count the number of projects to get.
     * @returns the latest projects.
     * @throws ProjectsRepositoryException when there is a problem with the repository.
     */
    getLatestProjects(count?: number): Promise<ProjectData[]>;
    /**
     * getProjectById()
     *
     * gets a project by its id.
     * @param id the id of the project to get.
     * @returns The project associated with the ID.
     * @throws ProjectNotFoundException when the project is not found.
     * @throws ProjectsRepositoryException when the repository encounters a problem.
     */
    getProjectById(id: ProjectIdData): Promise<ProjectData>;
    /**
     * getProjectsByTechnology()
     *
     * gets projects associated with the specified technology.
     * @param technology the technology to searc for
     * @returns the projects associated with the technology.
     * @throws ProjectNotFoundException when there is no projects found for that technology.
     * @throws ProjectsRepositoryException when there is a problem with the repository.
     */
    getProjectsByTechnology(technology: TechnologyData): Promise<ProjectData[]>;
    /**
     * searchBlogs()
     *
     * searches the blogs.
     * @param query the search query
     * @param count the number of results to return
     * @param start the starting position.
     * @returns the list of blogs that match the search query.
     * @throws BlogRepositoryException when there is an issue with the blog repository.
     * @throws BlogPostNotFoundException when there are no results for the query.
     */
    searchBlogs(query: SearchTextData, count?: number, start?: number): Promise<BlogPostData[]>;
}
//# sourceMappingURL=content.api.d.ts.map