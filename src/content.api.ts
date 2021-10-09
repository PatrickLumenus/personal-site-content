import { Api } from '@domeniere/core';
import BlogModule, { 
    BlogDataFactory,
    BlogId,
    BlogIdData,
    BlogPostData, 
    BlogsRepository, 
    GetBlogPostByIdQuery, 
    GetLatestBlogPostsQuery,
    SearchBlogPostsQuery,
    SearchTextData
} from './blog/blog.module';
import { ContentEventStore } from './content.eventstore';
import { ProjectIdData } from './project/data/project-id.data';
import ProjectModule, { 
    GetLatestProjectsQuery, 
    GetProjectByIdQuery, 
    ProjectData, 
    ProjectDataFactory, 
    ProjectId, 
    ProjectsRepository, 
    Technology, 
    TechnologyData
} from './project/project.module';
import { GetProjectsByTechnologyQuery } from './project/services/get-projects-by-technology.query';

/**
 * ContentApi
 * 
 * The content api.
 */

export class ContentApi extends Api {

    constructor(
        blogRepository: BlogsRepository,
        projectRepository: ProjectsRepository,
        eventStore: ContentEventStore
    ) {
        super('content', eventStore);
        
        // Blog module.
        const blogModule = new BlogModule();
        blogModule.registerRepositoryInstance(BlogsRepository, blogRepository);
        this.registerModule(blogModule);

        // Project module
        const projectModule = new ProjectModule();
        projectModule.registerRepositoryInstance(ProjectsRepository, projectRepository);
        this.registerModule(projectModule);
    }

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

    public async getBlogPostById(id: BlogIdData): Promise<BlogPostData> {
        const post = await this.domain.module('blog')
            .get(GetBlogPostByIdQuery)
            .execute(new BlogId(id.value));

        return this.domain.module('blog')
            .get(BlogDataFactory)
            .createFromObject(post);
    }

    /**
     * getLatestBlogs()
     * 
     * gets the latest blogs.
     * @param count the number of posts to get.
     * @param start the starting position.
     * @returns the latest posts.
     * @throws BlogRepositoryException when there is a problem with the repository.
     */

    public async getLatestBlogs(count: number = 10, start: number = 0): Promise<BlogPostData[]> {
        const results = await this.domain.module('blog')
            .get(GetLatestBlogPostsQuery)
            .execute(count, start);
        const factory = this.domain.module('blog').get(BlogDataFactory);
        return results.map(post => factory.createFromObject(post));
    }

    /**
     * getLatestProjects()
     * 
     * gets the latest projects
     * @param count the number of projects to get.
     * @returns the latest projects.
     * @throws ProjectsRepositoryException when there is a problem with the repository.
     */

    public async getLatestProjects(count: number = 3): Promise<ProjectData[]> {
        const projects = await this.domain.module('project')
            .get(GetLatestProjectsQuery)
            .execute(count);
        const factory = this.domain.module('project').get(ProjectDataFactory);
        return projects.map(project => factory.createFromObject(project));
    }

    /**
     * getProjectById()
     * 
     * gets a project by its id.
     * @param id the id of the project to get.
     * @returns The project associated with the ID.
     * @throws ProjectNotFoundException when the project is not found.
     * @throws ProjectsRepositoryException when the repository encounters a problem.
     */

    public async getProjectById(id: ProjectIdData): Promise<ProjectData> {
        const project = await this.domain.module('project')
            .get(GetProjectByIdQuery)
            .execute(new ProjectId(id.id));
        return this.domain.module('project')
            .get(ProjectDataFactory)
            .createFromObject(project);
    }

    /**
     * getProjectsByTechnology()
     * 
     * gets projects associated with the specified technology.
     * @param technology the technology to searc for
     * @returns the projects associated with the technology.
     * @throws ProjectNotFoundException when there is no projects found for that technology.
     * @throws ProjectsRepositoryException when there is a problem with the repository.
     */

    public async getProjectsByTechnology(technology: TechnologyData): Promise<ProjectData[]> {
        const projects = await this.domain.module('project')
            .get(GetProjectsByTechnologyQuery)
            .execute(new Technology(technology.technology));
        const factory = this.domain.module('project').get(ProjectDataFactory);
        return projects.map(project => factory.createFromObject(project));
    }

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

    public async searchBlogs(query: SearchTextData, count: number = 10, start: number = 0): Promise<BlogPostData[]> {
        const results = await this.domain.module('blog')
            .get(SearchBlogPostsQuery)
            .execute(query.content, count, start);
        const factory = this.domain.module('blog').get(BlogDataFactory);
        return results.map(post => factory.createFromObject(post));
    }
}