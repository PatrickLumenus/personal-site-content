export interface ProjectLogoInterface {
    /**
     * contentType()
     *
     * gets the content type
     */
    contentType(): string;
    /**
     * description()
     *
     * gets a brief description of the logo.
     */
    description(): string;
    /**
     * height()
     *
     * gets the height in pixels.
     */
    height(): number;
    /**
     * size()
     *
     * gets the size of the logo, in bytes.
     */
    size(): number;
    /**
     * source()
     *
     * gets the source of the project logo.
     */
    source(): URL | null;
    /**
     * width()
     *
     * gets the logo width in pixels.
     */
    width(): number;
}
//# sourceMappingURL=project-logo.interface.d.ts.map