import { BaseException } from '@swindle/core';


 export class EmailAlreadyInUseException extends BaseException {

    constructor(message: string = "Email Already In Use Error") {
        super(message);
    }
}