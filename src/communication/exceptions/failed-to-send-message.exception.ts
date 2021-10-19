import { BaseException } from '@swindle/core';


 export class FailedToSendMessageException extends BaseException {

    constructor(message: string = "Failed To Send Message Error") {
        super(message);
    }
}