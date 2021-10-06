import { AbstractFactory } from '@domeniere/factory';
import { BlogPost } from '../../aggregates/aggregates.well';
import { BlogPostData } from '../../data/data.well';
import { BlogDataFactoryInterface } from './blog-data-factory.interface';
export declare class BlogDataFactory extends AbstractFactory implements BlogDataFactoryInterface {
    constructor();
    /**
     * createFromObject()
     *
     * creates a blog post data from an object.
     * @param object the object to create from.
     */
    createFromObject(object: BlogPost): BlogPostData;
}
//# sourceMappingURL=blog-data.factory.d.ts.map