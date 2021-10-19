import { Data } from '@domeniere/dto';
import { EmailAddress } from '@swindle/core';
export declare class EmailMessageData extends Data {
    readonly name: string;
    readonly email: EmailAddress;
    readonly subject: string;
    readonly content: string;
    constructor(name: string, email: EmailAddress, subject: string, content: string);
    serialize(): string;
}
//# sourceMappingURL=email-message.data.d.ts.map