

export interface CoverImageInterface {
    
    /**
     * contentType()
     * 
     * gets the cover image content type.
     */

    contentType(): string;

    /**
     * description()
     * 
     * gets the cover image description.
     */

    description(): string;

    /**
     * hieght()
     * 
     * gets the cover image height in pixels.
     */

    height(): number;

    /**
     * size()
     * 
     * gets the file size of the image in bytes.
     */
    
    size(): number;

    /**
     * source()
     * 
     * gets the image source URL.
     */

    source(): URL;

    /**
     * width()
     * 
     * gets the width of the cover image in pixels.
     */

    width(): number;
}