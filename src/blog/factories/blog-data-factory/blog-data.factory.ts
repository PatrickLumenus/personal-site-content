import { AbstractFactory } from '@domeniere/factory';
import { BlogPost } from '../../aggregates/aggregates.well';
import { BlogPostData } from '../../data/data.well';
import { BlogDataFactoryInterface } from './blog-data-factory.interface';


export class BlogDataFactory extends AbstractFactory implements BlogDataFactoryInterface {
    
    constructor() {
        super();
    }

    /**
     * createFromObject()
     * 
     * creates a blog post data from an object.
     * @param object the object to create from.
     */

    public createFromObject(object: BlogPost): BlogPostData {
        return new BlogPostData(
            object.id().id(),
            object.title().value(),
            object.body().content(),
            object.summary().value()
        );
    }
}