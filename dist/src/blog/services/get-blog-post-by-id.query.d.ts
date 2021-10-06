import { Query } from '@domeniere/service';
import { BlogsRepository } from '../repositories/repositories.well';
import { BlogId } from '../values/values.well';
/**
 * GetBlogPostByIdQuery
 *
 * gets a blog post by its id.
 */
export declare class GetBlogPostByIdQuery extends Query {
    private readonly blogRepository;
    constructor(blogsRepository: BlogsRepository);
    /**
     * execute()
     *
     * executes the operation.
     * @param id the id to search for.
     * @returns the blog post.
     * @throws BlogRepositoryException when there is an error with the repository.
     * @throws BlogPostNotFoundException when the blog post is not found.
     */
    execute(id: BlogId): Promise<any>;
}
//# sourceMappingURL=get-blog-post-by-id.query.d.ts.map