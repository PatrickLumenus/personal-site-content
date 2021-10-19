import { Value } from '@domeniere/value';
import { EmailAddress } from '@swindle/core';
import { MessageSenderEmailInterface } from './message-sender-email.interface';
/**
 * MessageSenderEmail
 *
 * The message sender email address.
 */
export declare class MessageSenderEmail extends Value implements MessageSenderEmailInterface {
    private readonly _email;
    constructor(email: EmailAddress);
    equals(suspect: any): boolean;
    id(): EmailAddress;
    serialize(): string;
}
//# sourceMappingURL=message-sender-email.d.ts.map