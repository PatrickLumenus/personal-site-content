import { BaseException } from '@swindle/core';


 export class ProjectStatisticsException extends BaseException {

    constructor(message: string = "Project Statistics Error") {
        super(message);
    }
}