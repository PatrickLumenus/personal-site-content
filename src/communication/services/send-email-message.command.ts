import { Command } from '@domeniere/service';
import { EmailAddress } from '@swindle/core';
import { EmailMessage } from '../aggregates/aggregates.well';
import { EmailMessageSent } from '../events/events.well';
import { FailedToSendMessageException } from '../exceptions/exceptions.well';

/**
 * SendEmailMessageCommand
 * 
 * Sends an email message.
 */

export abstract class SendEmailMessageCommand extends Command {

    constructor() {
        super();
    }

    /**
     * exexute()
     * 
     * executes the operation.
     * @param message the message to send.
     * @throws FailedToSendMessageException when the message could not be sent.
     */

    public async execute(message: EmailMessage): Promise<void> {

        try {
            await this.send(message.name().name(), message.email(), message.subject().subject(), message.content().content());
            await this.emit(new EmailMessageSent(message));
        }
        catch(e) {
            throw new FailedToSendMessageException((e as Error).message);
        }
    }

    /**
     * send()
     * 
     * sends the message.
     * @param name the sender name
     * @param email the sender email.
     * @param subject the message subject.
     * @param content the message content.
     * @throws any exception on an error.
     */

    protected abstract send(name: string, email: EmailAddress, subject: string, content: string): Promise<void>;
}