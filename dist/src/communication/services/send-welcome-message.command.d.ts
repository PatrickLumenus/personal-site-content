import { Command } from '@domeniere/service';
import { EmailAddress } from '@swindle/core';
/**
 * SendWelcomeMessageCommand
 *
 * Sends the welcome message to the specified email address
 */
export declare abstract class SendWelcomeMessageCommand extends Command {
    constructor();
    /**
     * execute()
     *
     * executes the operation.
     * @param email the email to send the message to.
     */
    abstract execute(name: string, email: EmailAddress): Promise<void>;
}
//# sourceMappingURL=send-welcome-message.command.d.ts.map