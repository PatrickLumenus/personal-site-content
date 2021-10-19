import { TimestampedAggregate } from '@domeniere/aggregate';
import { DateTime, EmailAddress } from '@swindle/core';
import { SenderDetails } from '../../entities/entities.well';
import { MessageContent, MessageSenderName, MessageSubject } from '../../values/values.well';
import { EmailMessageInterface } from './email-message.interface';
/**
 * EmailMessage
 *
 * EmailMessage represents an email message.
 */
export declare class EmailMessage extends TimestampedAggregate implements EmailMessageInterface {
    private _content;
    constructor(root: SenderDetails, content: MessageContent, version?: number | undefined, createdOn?: DateTime, updatedOn?: DateTime, deletedOn?: DateTime | null);
    /**
     * content()
     *
     * gets the content.
     */
    content(): MessageContent;
    /**
     * email()
     *
     * gets the email address.
     */
    email(): EmailAddress;
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * gets the name of the sender.
     */
    name(): MessageSenderName;
    protected root(): SenderDetails;
    protected serializeData(): string;
    /**
     * subject()
     *
     * gets the message subject.
     */
    subject(): MessageSubject;
}
//# sourceMappingURL=email-message.d.ts.map