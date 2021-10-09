import { BaseException } from '@swindle/core';


 export class ProjectsRepositoryException extends BaseException {

    constructor(message: string = "Projects Repository Error") {
        super(message);
    }
}