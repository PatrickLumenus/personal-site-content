import { BaseException } from '@swindle/core';


 export class SubscriberIdException extends BaseException {

    constructor(message: string = "Subscriber Id Error") {
        super(message);
    }
}