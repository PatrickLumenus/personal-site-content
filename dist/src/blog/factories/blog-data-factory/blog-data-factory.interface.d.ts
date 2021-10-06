import { BlogPost } from "../../aggregates/aggregates.well";
import { BlogPostData } from "../../data/data.well";
export interface BlogDataFactoryInterface {
    /**
     * createFromObject()
     *
     * creates a blog post data from an object.
     * @param object the object to create from.
     */
    createFromObject(object: BlogPost): BlogPostData;
}
//# sourceMappingURL=blog-data-factory.interface.d.ts.map