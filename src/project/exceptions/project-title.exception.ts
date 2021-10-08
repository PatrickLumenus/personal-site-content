import { BaseException } from '@swindle/core';


 export class ProjectTitleException extends BaseException {

    constructor(message: string = "Project Title Error") {
        super(message);
    }
}