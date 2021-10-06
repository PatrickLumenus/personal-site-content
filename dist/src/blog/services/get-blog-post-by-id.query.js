"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBlogPostByIdQuery = void 0;
const service_1 = require("@domeniere/service");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * GetBlogPostByIdQuery
 *
 * gets a blog post by its id.
 */
class GetBlogPostByIdQuery extends service_1.Query {
    constructor(blogsRepository) {
        super();
        this.blogRepository = blogsRepository;
    }
    /**
     * execute()
     *
     * executes the operation.
     * @param id the id to search for.
     * @returns the blog post.
     * @throws BlogRepositoryException when there is an error with the repository.
     * @throws BlogPostNotFoundException when the blog post is not found.
     */
    async execute(id) {
        let res = null;
        try {
            res = await this.blogRepository.getById(id);
        }
        catch (e) {
            throw new exceptions_well_1.BlogRepositoryException(e.message);
        }
        if (!res) {
            throw new exceptions_well_1.BlogPostNotFoundException();
        }
        return res;
    }
}
exports.GetBlogPostByIdQuery = GetBlogPostByIdQuery;
