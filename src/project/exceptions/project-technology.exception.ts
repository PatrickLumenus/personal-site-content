import { BaseException } from '@swindle/core';


 export class ProjectTechnologyException extends BaseException {

    constructor(message: string = "Project Technology Error") {
        super(message);
    }
}