import { Command } from '@domeniere/service';
import { EmailAddress } from '@swindle/core';
/**
 * SendGoodbyeMessageCommand()
 *
 * sends the GoodbyeMessage.
 */
export declare abstract class SendGoodbyeMessageCommand extends Command {
    constructor();
    /**
     * execute()
     *
     * executes the operation.
     * @param email the email address to sned to
     * @throws any exception when an error occurs.
     */
    abstract execute(email: EmailAddress): Promise<void>;
}
//# sourceMappingURL=send-goodbye-message.command.d.ts.map