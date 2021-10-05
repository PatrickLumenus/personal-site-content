import { BaseException } from '@swindle/core';


 export class BlogIdException extends BaseException {

    constructor(message: string = "Blog Id Error") {
        super(message);
    }
}