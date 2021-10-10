import { Data } from '@domeniere/dto';
import { MethodUndefinedException } from '@swindle/core';


export class SubscriberData extends Data {

    public readonly id: string;
    public readonly email: string;

    constructor(id: string, email: string) {
        super();
        this.id = id;
        this.email = email;
    }

    public serialize(): string {
        return JSON.stringify({
            id: this.id,
            email: this.email
        });
    }
}