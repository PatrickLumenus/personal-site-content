import { Data } from '@domeniere/dto';
import { EmailAddress, MethodUndefinedException } from '@swindle/core';


export class SubscriberRequestData extends Data {

    public readonly name: string;
    public readonly email: EmailAddress;

    constructor(
        name: string,
        email: EmailAddress,
    ) {
        super();
        this.name = name;
        this.email = email;
    }

    public serialize(): string {
        return JSON.stringify({
            name: this.name,
            email: this.email.toString()
        });
    }
}