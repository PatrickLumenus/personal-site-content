import { Query } from '@domeniere/service';
import { MethodUndefinedException } from '@swindle/core';
import { BlogPost } from '../aggregates/aggregates.well';
import { BlogRepositoryException } from '../exceptions/exceptions.well';
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
     * @throws BlogRepositoryException when there is an issue with the repository.
     */

    public async execute(count: number, start: number = 0): Promise<BlogPost[]> {
        try {
            return await this.blogsRepository.getLatest(count, start);
        }
        catch(e) {
            throw new BlogRepositoryException((e as Error).message);
        }
    }
}