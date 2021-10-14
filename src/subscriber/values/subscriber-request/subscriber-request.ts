import { Value } from '@domeniere/value';
import { EmailAddress, MethodUndefinedException } from '@swindle/core';
import { SubscriberRequestInterface } from './subscriber-request.interface';

/**
 * SubscriberRequest
 * 
 * A subscriber request
 */

 export class SubscriberRequest extends Value implements SubscriberRequestInterface {

    private readonly _email: EmailAddress;
    private readonly _name: string;

    constructor(name: string, email: EmailAddress) {
        super();
        this._email = email;
        this._name = name;
    }

     /**
      * email()
      * 
      * gets the email address.
      */

    public email(): EmailAddress {
        return this._email;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof SubscriberRequest) {
            const other = suspect as SubscriberRequest;
            isEqual = (this.email().equals(other.email())) && (this.name() === other.name());
        }

        return isEqual;
    }

    /**
     * name()
     * 
     * gets the name of the subscriber.
     */

    public name(): string {
        return this._name;
    }

    public serialize(): string {
        return JSON.stringify({
            email: this.email().toString()
        });
    }
}