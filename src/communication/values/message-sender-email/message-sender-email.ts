import { Value } from '@domeniere/value';
import { EmailAddress, MethodUndefinedException } from '@swindle/core';
import { MessageSenderEmailInterface } from './message-sender-email.interface';

/**
 * MessageSenderEmail
 * 
 * The message sender email address.
 */

 export class MessageSenderEmail extends Value implements MessageSenderEmailInterface {

    private readonly _email: EmailAddress;

    constructor(email: EmailAddress) {
        super();
        this._email = email;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof MessageSenderEmail) {
            const other = suspect as MessageSenderEmail;
            isEqual = this.id().equals(other.id());
        }

        return isEqual;
    }

    public id(): EmailAddress {
        return this._email;
    }

    public serialize(): string {
        return this.id().toString();
    }
}