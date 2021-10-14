import { BaseException } from '@swindle/core';


 export class SubscriberNameException extends BaseException {

    constructor(message: string = "Subscriber Name Error") {
        super(message);
    }
}