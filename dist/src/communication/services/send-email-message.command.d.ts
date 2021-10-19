import { Command } from '@domeniere/service';
import { EmailAddress } from '@swindle/core';
import { EmailMessage } from '../aggregates/aggregates.well';
/**
 * SendEmailMessageCommand
 *
 * Sends an email message.
 */
export declare abstract class SendEmailMessageCommand extends Command {
    constructor();
    /**
     * exexute()
     *
     * executes the operation.
     * @param message the message to send.
     * @throws FailedToSendMessageException when the message could not be sent.
     */
    execute(message: EmailMessage): Promise<void>;
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
//# sourceMappingURL=send-email-message.command.d.ts.map