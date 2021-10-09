import { BaseException } from '@swindle/core';


 export class ProjectNotFoundException extends BaseException {

    constructor(message: string = "Project Not Found Error") {
        super(message);
    }
}