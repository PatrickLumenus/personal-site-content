import { BaseException } from '@swindle/core';


 export class MessageSubjectException extends BaseException {

    constructor(message: string = "Message Subject Error") {
        super(message);
    }
}