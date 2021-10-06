"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlogPostsQuery = void 0;
const service_1 = require("@domeniere/service");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * SearchBlogPostsQuery
 *
 * Searches the blog posts.
 */
class SearchBlogPostsQuery extends service_1.Query {
    constructor(blogsRepository) {
        super();
        this.blogsRepository = blogsRepository;
    }
    /**
     * execute()
     *
     * executes the operation.
     * @param text the search text.
     * @param count the number of results to return.
     * @param start the starting position
     * @returns a list of BlogPost objects.
     * @throws BlogRepositoryException when there is a problem with the blog repository.
     * @throws BlogPostNotFoundException when no results are found.
     */
    async execute(text, count = 10, start = 0) {
        let res;
        try {
            res = await this.blogsRepository.findBySearchText(text, count, start);
        }
        catch (e) {
            throw new exceptions_well_1.BlogRepositoryException(e.message);
        }
        if (res.length === 0) {
            throw new exceptions_well_1.BlogPostNotFoundException();
        }
        return res;
    }
}
exports.SearchBlogPostsQuery = SearchBlogPostsQuery;
