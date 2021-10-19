import { Data } from '@domeniere/dto';
import { EmailAddress, MethodUndefinedException } from '@swindle/core';


export class EmailMessageData extends Data {

    public readonly name: string;
    public readonly email: EmailAddress;
    public readonly subject: string;
    public readonly content: string;

    constructor(
        name: string,
        email: EmailAddress,
        subject: string,
        content: string,
    ) {
        super();
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.content = content;
    }

    public serialize(): string {
        return JSON.stringify({
            name: this.name,
            email: this.email.toString(),
            subject: this.subject,
            content: this.content,
        });
    }
}