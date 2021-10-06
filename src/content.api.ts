import { Api } from '@domeniere/core';
import BlogModule, { BlogsRepository } from './blog/blog.module';
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

    public printWelcome(): void {
        console.log("Welcome to Domeniere");
    }
}