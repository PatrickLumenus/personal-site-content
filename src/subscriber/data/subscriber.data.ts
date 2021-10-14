import { Data } from '@domeniere/dto';
import { MethodUndefinedException } from '@swindle/core';


export class SubscriberData extends Data {

    public readonly id: string;
    public readonly email: string;
    public readonly name: string;

    constructor(id: string, name: string, email: string) {
        super();
        this.id = id;
        this.email = email;
        this.name = name;
    }

    public serialize(): string {
        return JSON.stringify({
            id: this.id,
            name: this.name,
            email: this.email
        });
    }
}