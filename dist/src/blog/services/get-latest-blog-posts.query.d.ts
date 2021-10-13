import { Query } from '@domeniere/service';
import { BlogPost } from '../aggregates/aggregates.well';
import { BlogsRepository } from '../repositories/repositories.well';
/**
 * GetLatestBlogPostsQuery()
 *
 * Gets the latest blog posts.
 */
export declare class GetLatestBlogPostsQuery extends Query {
    private readonly blogsRepository;
    constructor(blogsRepository: BlogsRepository);
    /**
     * execute()
     *
     * executes the operation.
     * @param count the number of posts to get.
     * @param start the starting index.
     * @returns the list of blog posts.
     * @throws BlogPostNotFoundException when there are no blog posts to be retrieved.
     * @throws BlogRepositoryException when there is an issue with the repository.
     */
    execute(count: number, start?: number): Promise<BlogPost[]>;
}
//# sourceMappingURL=get-latest-blog-posts.query.d.ts.map