import { Api } from '@domeniere/core';
import { BlogIdData, BlogPostData, BlogsRepository, SearchTextData } from './blog/blog.module';
import { ContentEventStore } from './content.eventstore';
export declare class ContentApi extends Api {
    constructor(blogRepository: BlogsRepository, eventStore: ContentEventStore);
    /**
     * getBlogPostById()
     *
     * gets a blog post bhy its id.
     * @param id the id of the blog to search for.
     * @returns the blog post associated with the id.
     * @throws BlogIdException when the blog id is invalid.
     * @throws BlogRepositoryException when there is a problem with the repository.
     * @throws BlogPostNotFoundException when the posts cannot be found.
     */
    getBlogPostById(id: BlogIdData): Promise<BlogPostData>;
    /**
     * getLatestBlogs()
     *
     * gets the latest blogs.
     * @param count the number of posts to get.
     * @param start the starting position.
     * @returns the latest posts.
     * @throws BlogRepositoryException when there is a problem with the repository.
     */
    getLatestBlogs(count?: number, start?: number): Promise<BlogPostData[]>;
    /**
     * searchBlogs()
     *
     * searches the blogs.
     * @param query the search query
     * @param count the number of results to return
     * @param start the starting position.
     * @returns the list of blogs that match the search query.
     * @throws BlogRepositoryException when there is an issue with the blog repository.
     * @throws BlogPostNotFoundException when there are no results for the query.
     */
    searchBlogs(query: SearchTextData, count?: number, start?: number): Promise<BlogPostData[]>;
}
//# sourceMappingURL=content.api.d.ts.map