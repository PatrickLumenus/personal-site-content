import { Query } from '@domeniere/service';
import { BlogPost } from '../aggregates/aggregates.well';
import { BlogsRepository } from '../repositories/repositories.well';
/**
 * SearchBlogPostsQuery
 *
 * Searches the blog posts.
 */
export declare class SearchBlogPostsQuery extends Query {
    private readonly blogsRepository;
    constructor(blogsRepository: BlogsRepository);
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
    execute(text: string, count?: number, start?: number): Promise<BlogPost[]>;
}
//# sourceMappingURL=search-blog-posts.query.d.ts.map