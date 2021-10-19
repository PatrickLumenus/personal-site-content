import { BaseException } from '@swindle/core';


 export class MessageContentException extends BaseException {

    constructor(message: string = "Message Content Error") {
        super(message);
    }
}