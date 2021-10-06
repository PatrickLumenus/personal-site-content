import { Query } from '@domeniere/service';
import { BlogPost } from '../aggregates/aggregates.well';
import { 
    BlogPostNotFoundException, 
    BlogRepositoryException 
} from '../exceptions/exceptions.well';
import { BlogsRepository } from '../repositories/repositories.well';
import { BlogId } from '../values/values.well';

/**
 * GetBlogPostByIdQuery
 * 
 * gets a blog post by its id.
 */

export class GetBlogPostByIdQuery extends Query {

    private readonly blogRepository: BlogsRepository;

    constructor(blogsRepository: BlogsRepository) {
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

    public async execute(id: BlogId): Promise<any> {
        let res: BlogPost|null = null;
        try {
            res = await this.blogRepository.getById(id);
        }
        catch(e) {
            throw new BlogRepositoryException((e as Error).message);
        }

        if (!res) {
            throw new BlogPostNotFoundException();
        }

        return res;
    }
}