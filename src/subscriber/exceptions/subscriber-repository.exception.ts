import { BaseException } from '@swindle/core';


 export class SubscriberRepositoryException extends BaseException {

    constructor(message: string = "Subscriber Repository Error") {
        super(message);
    }
}