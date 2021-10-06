import { BaseException } from '@swindle/core';


 export class BlogRepositoryException extends BaseException {

    constructor(message: string = "Blog Repository Error") {
        super(message);
    }
}