"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLatestBlogPostsQuery = void 0;
const service_1 = require("@domeniere/service");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * GetLatestBlogPostsQuery()
 *
 * Gets the latest blog posts.
 */
class GetLatestBlogPostsQuery extends service_1.Query {
    constructor(blogsRepository) {
        super();
        this.blogsRepository = blogsRepository;
    }
    /**
     * execute()
     *
     * executes the operation.
     * @param count the number of posts to get.
     * @param start the starting index.
     * @returns the list of blog posts.
     * @throws BlogRepositoryException when there is an issue with the repository.
     */
    async execute(count, start = 0) {
        try {
            return await this.blogsRepository.getLatest(count, start);
        }
        catch (e) {
            throw new exceptions_well_1.BlogRepositoryException(e.message);
        }
    }
}
exports.GetLatestBlogPostsQuery = GetLatestBlogPostsQuery;
