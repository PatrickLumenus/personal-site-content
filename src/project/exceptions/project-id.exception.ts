import { BaseException } from '@swindle/core';


 export class ProjectIdException extends BaseException {

    constructor(message: string = "Project Id Error") {
        super(message);
    }
}