import { BaseException } from '@swindle/core';


 export class SubscriberNotFoundException extends BaseException {

    constructor(message: string = "Subscriber Not Found Error") {
        super(message);
    }
}