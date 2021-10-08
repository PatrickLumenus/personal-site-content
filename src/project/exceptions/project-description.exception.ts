import { BaseException } from '@swindle/core';


 export class ProjectDescriptionException extends BaseException {

    constructor(message: string = "Project Description Error") {
        super(message);
    }
}