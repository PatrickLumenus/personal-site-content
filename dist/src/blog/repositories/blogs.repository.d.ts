import { Repository } from '@domeniere/repository';
import { BlogPost } from '../aggregates/aggregates.well';
import { BlogId } from '../values/values.well';
/**
 * BlogsRepository
 *
 * The blogs repository.
 */
export declare abstract class BlogsRepository extends Repository {
    constructor();
    /**
     * findBySearchTerm()
     *
     * searches the repository for blog posts that match certain criteria specified by the text.
     * @param text the search text
     * @param count the number of results to return.
     * @param start the starting postirion.
     */
    abstract findBySearchText(text: string, count: number, start: number): Promise<BlogPost[]>;
    /**
     * getById()
     *
     * gets the blog post by its id.
     * @param id the id of the blog.
     * @throws An exception when there is an error.
     */
    abstract getById(id: BlogId): Promise<BlogPost | null>;
    /**
     * getLatest()
     *
     * gets the latest blog posts.
     * @param count the number of blog posts to get.
     * @param start the starting position.
     * @throws An Exception when there is a problem.
     */
    abstract getLatest(count: number, start: number): Promise<BlogPost[]>;
    abstract remove(aggregate: BlogPost): Promise<void>;
    abstract save(aggregate: BlogPost): Promise<void>;
    abstract size(): Promise<number>;
}
//# sourceMappingURL=blogs.repository.d.ts.map