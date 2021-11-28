import { TimestampedAggregate } from '@domeniere/aggregate';
import { State } from '@domeniere/common';
import { DateTime, EmailAddress } from '@swindle/core';
import { SenderDetails } from '../../entities/entities.well';
import { MessageContent, MessageSenderName, MessageSubject } from '../../values/values.well';
import { EmailMessageInterface } from './email-message.interface';

/**
 * EmailMessage 
 * 
 * EmailMessage represents an email message.
 */

export class EmailMessage extends TimestampedAggregate implements EmailMessageInterface {

    @State()
    private _content: MessageContent;
    
    constructor(
        root: SenderDetails, 
        content: MessageContent,
        version: number|undefined = 1.0, 
        createdOn: DateTime = DateTime.Now(), 
        updatedOn: DateTime = DateTime.Now(), 
        deletedOn: DateTime|null = null
    ) {
        super(root, version, createdOn, updatedOn, deletedOn);
        this._content = content;
    }

    /**
     * content()
     * 
     * gets the content.
     */

    public content(): MessageContent {
        return this._content;
    }

    /**
     * email()
     * 
     * gets the email address.
     */

    public email(): EmailAddress {
        return this.root().id().id();
    }

    public equals(suspect: any): boolean {

        let isEquals = false;

        if (suspect instanceof EmailMessage) {
            const other = suspect as EmailMessage;
            isEquals = this.id().equals(other.id());
        }

        return isEquals;
    }

    /**
     * name()
     * 
     * gets the name of the sender.
     */

    public name(): MessageSenderName {
        return this.root().name();
    }

    protected root(): SenderDetails {
        return super.root() as SenderDetails;
    }

    protected serializeData(): string {
        return JSON.stringify({
            content: this.content().serialize()
        });
    }

    /**
     * subject()
     * 
     * gets the message subject.
     */

    public subject(): MessageSubject {
        return this.root().subject();
    }
}