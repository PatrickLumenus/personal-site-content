import { BaseException } from '@swindle/core';


 export class MessageSenderNameException extends BaseException {

    constructor(message: string = "Message Sender Name Error") {
        super(message);
    }
}