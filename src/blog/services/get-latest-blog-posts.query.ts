import { Query } from '@domeniere/service';
import { MethodUndefinedException } from '@swindle/core';
import { BlogPost } from '../aggregates/aggregates.well';
import { BlogPostNotFoundException, BlogRepositoryException } from '../exceptions/exceptions.well';
import { BlogsRepository } from '../repositories/repositories.well';

/**
 * GetLatestBlogPostsQuery()
 * 
 * Gets the latest blog posts.
 */

export class GetLatestBlogPostsQuery extends Query {

    private readonly blogsRepository: BlogsRepository;

    constructor(blogsRepository: BlogsRepository) {
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
     * @throws BlogPostNotFoundException when there are no blog posts to be retrieved.
     * @throws BlogRepositoryException when there is an issue with the repository.
     */

    public async execute(count: number, start: number = 0): Promise<BlogPost[]> {
        try {
            const blogs = await this.blogsRepository.getLatest(count, start);

            if (blogs.length == 0) {
                throw new BlogPostNotFoundException();
            }
            
            return blogs;
        }
        catch(e) {
            if (e instanceof BlogPostNotFoundException) {
                throw e;
            }
            else {
                throw new BlogRepositoryException((e as Error).message);
            }
        }
    }
}