import { Api } from '@domeniere/core';
import { BlogsRepository } from './blog/blog.module';
import { ContentEventStore } from './content.eventstore';
export declare class ContentApi extends Api {
    constructor(blogRepository: BlogsRepository, eventStore: ContentEventStore);
    printWelcome(): void;
}
//# sourceMappingURL=content.api.d.ts.map