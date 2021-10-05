import { BaseException } from '@swindle/core';


 export class BlogTitleException extends BaseException {

    constructor(message: string = "Blog Title Error") {
        super(message);
    }
}