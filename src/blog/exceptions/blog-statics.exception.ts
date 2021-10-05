import { BaseException } from '@swindle/core';


 export class BlogStaticsException extends BaseException {

    constructor(message: string = "Blog Statics Error") {
        super(message);
    }
}