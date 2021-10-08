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
class ContentApi extends core_1.Api {
    constructor(blogRepository, eventStore) {
        super('content', eventStore);
        // Blog module.
        const blogModule = new blog_module_1.default();
        blogModule.registerRepositoryInstance(blog_module_1.BlogsRepository, blogRepository);
        this.registerModule(blogModule);
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
