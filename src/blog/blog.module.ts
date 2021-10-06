import { Module } from '@domeniere/module';
import { BlogsRepository } from './repositories/repositories.well';
import { GetBlogPostByIdQuery, GetLatestBlogPostsQuery, SearchBlogPostsQuery } from './services/services.well';

/**
 * The Blog module
 */

export default class BlogModule extends Module {
    constructor() {
        super('blog');
    }

    protected createdBindings() {
        this.bindRepository(BlogsRepository);
        this.bindService(GetLatestBlogPostsQuery, (module) => {
            return new GetLatestBlogPostsQuery(module.get(BlogsRepository));
        });
        this.bindService(GetBlogPostByIdQuery, (module) => {
            return new GetBlogPostByIdQuery(module.get(BlogsRepository));
        });
        this.bindService(SearchBlogPostsQuery, (module) => {
            return new SearchBlogPostsQuery(module.get(BlogsRepository));
        });
    }
}

// module well exports go here.
export * from "./values/values.well";
export * from "./exceptions/exceptions.well";
export * from "./entities/entities.well";
export * from "./aggregates/aggregates.well";
export * from "./repositories/repositories.well";
export * from "./services/services.well";