import { DomainEvent } from '@domeniere/event';
import { DateTime } from '@swindle/core';
import { EmailMessage } from '../aggregates/aggregates.well';
/**
 * EmailMessageSent
 *
 * An event indicating an email message has been sent.
 */
export declare class EmailMessageSent extends DomainEvent {
    private readonly _message;
    constructor(message: EmailMessage, occuredOn?: DateTime, id?: string | undefined);
    static EventClassification(): string;
    static EventName(): string;
    static EventVersion(): number;
    isError(): boolean;
    /**
     * message()
     *
     * gets the message that was sent.
     */
    message(): EmailMessage;
    serializeData(): string;
    shouldBeBroadcasted(): boolean;
}
//# sourceMappingURL=email-message-sent.event.d.ts.map