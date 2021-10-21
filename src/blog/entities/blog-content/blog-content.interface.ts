import { 
    BlogBodyInterface,
    BlogSummaryInterface, 
    BlogTitleInterface, 
    CoverImageInterface
} from "../../values/values.well";


export interface BlogContentInterface {

    /**
     * body()
     * 
     * gets the blog body.
     */
    
    body(): BlogBodyInterface;

    /**
     * coverImage()
     * 
     * gets the cover cover image.
     */

    coverImage(): CoverImageInterface | null;

    /**
     * summary()
     * 
     * gets the blog summary.
     */
    summary(): BlogSummaryInterface

    /**
     * title()
     * 
     * gets the title.
     */

    title(): BlogTitleInterface;
}