import { Query } from '@domeniere/service';
import { MethodUndefinedException } from '@swindle/core';
import { BlogPost } from '../aggregates/aggregates.well';
import { BlogPostNotFoundException, BlogRepositoryException } from '../exceptions/exceptions.well';
import { BlogsRepository } from '../repositories/repositories.well';

/**
 * SearchBlogPostsQuery
 * 
 * Searches the blog posts.
 */

export class SearchBlogPostsQuery extends Query {

    private readonly blogsRepository: BlogsRepository;

    constructor(blogsRepository: BlogsRepository) {
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

    public async execute(text: string, count: number = 10, start: number = 0): Promise<BlogPost[]> {
        let res: BlogPost[];

        try {
            res = await this.blogsRepository.findBySearchText(text, count, start);
        }
        catch(e) {
            throw new BlogRepositoryException((e as Error).message);
        }

        if (res.length === 0) {
            throw new BlogPostNotFoundException();
        }

        return res;
    }
}