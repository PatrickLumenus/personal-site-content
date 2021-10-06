import { Api } from '@domeniere/core';
import BlogModule, { 
    BlogDataFactory,
    BlogId,
    BlogIdData,
    BlogPostData, 
    BlogsRepository, 
    GetBlogPostByIdQuery, 
    GetLatestBlogPostsQuery,
    SearchBlogPostsQuery,
    SearchTextData
} from './blog/blog.module';
import { ContentEventStore } from './content.eventstore';


export class ContentApi extends Api {

    constructor(
        blogRepository: BlogsRepository,
        eventStore: ContentEventStore
    ) {
        super('content', eventStore);
        
        // Blog module.
        const blogModule = new BlogModule();
        blogModule.registerRepositoryInstance(BlogsRepository, blogRepository);
        this.registerModule(blogModule);
    }

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

    public async getBlogPostById(id: BlogIdData): Promise<BlogPostData> {
        const post = await this.domain.module('blog')
            .get(GetBlogPostByIdQuery)
            .execute(new BlogId(id.value));

        return this.domain.module('blog')
            .get(BlogDataFactory)
            .createFromObject(post);
    }

    /**
     * getLatestBlogs()
     * 
     * gets the latest blogs.
     * @param count the number of posts to get.
     * @param start the starting position.
     * @returns the latest posts.
     * @throws BlogRepositoryException when there is a problem with the repository.
     */

    public async getLatestBlogs(count: number = 10, start: number = 0): Promise<BlogPostData[]> {
        const results = await this.domain.module('blog')
            .get(GetLatestBlogPostsQuery)
            .execute(count, start);
        return results.map(post => {
            return this.domain.module('blog')
                .get(BlogDataFactory)
                .createFromObject(post);
        });
    }

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

    public async searchBlogs(query: SearchTextData, count: number = 10, start: number = 0): Promise<BlogPostData[]> {
        const results = await this.domain.module('blog')
            .get(SearchBlogPostsQuery)
            .execute(query.content, count, start);
        const factory = this.domain.module('blog').get(BlogDataFactory);
        return results.map(post => factory.createFromObject(post));
    }
}