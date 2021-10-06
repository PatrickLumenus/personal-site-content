import { Repository } from '@domeniere/repository';
import { Aggregate } from '@domeniere/aggregate';
import { BlogPost } from '../aggregates/aggregates.well';
import { BlogId } from '../values/values.well';

/**
 * BlogsRepository
 * 
 * The blogs repository.
 */

export abstract class BlogsRepository extends Repository {

    constructor() {
        super();
    }

    /**
     * findBySearchTerm()
     * 
     * searches the repository for blog posts that match certain criteria specified by the text.
     * @param text the search text
     * @param count the number of results to return.
     * @param start the starting postirion.
     */

    public abstract findBySearchText(text: string, count: number, start: number): Promise<BlogPost[]>;

    /**
     * getById()
     * 
     * gets the blog post by its id.
     * @param id the id of the blog.
     * @throws An exception when there is an error.
     */

    public abstract getById(id: BlogId): Promise<BlogPost|null>;

    /**
     * getLatest()
     * 
     * gets the latest blog posts.
     * @param count the number of blog posts to get.
     * @param start the starting position.
     * @throws An Exception when there is a problem.
     */

    public abstract getLatest(count: number, start: number): Promise<BlogPost[]>

    public abstract remove(aggregate: BlogPost): Promise<void>;

    public abstract save(aggregate: BlogPost): Promise<void>;

    public abstract size(): Promise<number>;
}