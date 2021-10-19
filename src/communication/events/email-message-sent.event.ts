import { DomainEvent } from '@domeniere/event';
import { DateTime, MethodUndefinedException } from '@swindle/core';
import { EmailMessage } from '../aggregates/aggregates.well';

/**
 * EmailMessageSent
 * 
 * An event indicating an email message has been sent.
 */

export class EmailMessageSent extends DomainEvent {

    private readonly _message: EmailMessage;

    constructor(
        message: EmailMessage,
        occuredOn: DateTime = DateTime.Now(), 
        id: string|undefined = undefined
    ) {
        super(occuredOn, id);
        this._message = message;
    }

    public static EventClassification(): string {
        return 'content';
    }

    public static EventName(): string {
        return 'email-message-sent';
    }

    public static EventVersion(): number {
        return 1.0;
    }

    public isError(): boolean {
        return false;
    }

    /**
     * message()
     * 
     * gets the message that was sent.
     */

    public message(): EmailMessage {
        return this._message;
    }

    public serializeData(): string {
        return JSON.stringify({
            message: this.message().serialize(),
        });
    }

    public shouldBeBroadcasted(): boolean {
        return true;
    }
}