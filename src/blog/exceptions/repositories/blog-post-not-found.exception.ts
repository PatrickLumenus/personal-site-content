import { BaseException } from '@swindle/core';


 export class BlogPostNotFoundException extends BaseException {

    constructor(message: string = "Blog Post Not Found Error") {
        super(message);
    }
}