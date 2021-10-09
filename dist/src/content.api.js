"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentApi = void 0;
const core_1 = require("@domeniere/core");
const blog_module_1 = __importStar(require("./blog/blog.module"));
const project_module_1 = __importStar(require("./project/project.module"));
const get_projects_by_technology_query_1 = require("./project/services/get-projects-by-technology.query");
/**
 * ContentApi
 *
 * The content api.
 */
class ContentApi extends core_1.Api {
    constructor(blogRepository, projectRepository, eventStore) {
        super('content', eventStore);
        // Blog module.
        const blogModule = new blog_module_1.default();
        blogModule.registerRepositoryInstance(blog_module_1.BlogsRepository, blogRepository);
        this.registerModule(blogModule);
        // Project module
        const projectModule = new project_module_1.default();
        projectModule.registerRepositoryInstance(project_module_1.ProjectsRepository, projectRepository);
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
    async getBlogPostById(id) {
        const post = await this.domain.module('blog')
            .get(blog_module_1.GetBlogPostByIdQuery)
            .execute(new blog_module_1.BlogId(id.value));
        return this.domain.module('blog')
            .get(blog_module_1.BlogDataFactory)
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
    async getLatestBlogs(count = 10, start = 0) {
        const results = await this.domain.module('blog')
            .get(blog_module_1.GetLatestBlogPostsQuery)
            .execute(count, start);
        const factory = this.domain.module('blog').get(blog_module_1.BlogDataFactory);
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
    async getLatestProjects(count = 3) {
        const projects = await this.domain.module('project')
            .get(project_module_1.GetLatestProjectsQuery)
            .execute(count);
        const factory = this.domain.module('project').get(project_module_1.ProjectDataFactory);
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
    async getProjectById(id) {
        const project = await this.domain.module('project')
            .get(project_module_1.GetProjectByIdQuery)
            .execute(new project_module_1.ProjectId(id.id));
        return this.domain.module('project')
            .get(project_module_1.ProjectDataFactory)
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
    async getProjectsByTechnology(technology) {
        const projects = await this.domain.module('project')
            .get(get_projects_by_technology_query_1.GetProjectsByTechnologyQuery)
            .execute(new project_module_1.Technology(technology.technology));
        const factory = this.domain.module('project').get(project_module_1.ProjectDataFactory);
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
    async searchBlogs(query, count = 10, start = 0) {
        const results = await this.domain.module('blog')
            .get(blog_module_1.SearchBlogPostsQuery)
            .execute(query.content, count, start);
        const factory = this.domain.module('blog').get(blog_module_1.BlogDataFactory);
        return results.map(post => factory.createFromObject(post));
    }
}
exports.ContentApi = ContentApi;
