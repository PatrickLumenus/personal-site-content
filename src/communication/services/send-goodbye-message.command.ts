import { Command } from '@domeniere/service';
import { EmailAddress } from '@swindle/core';

/**
 * SendGoodbyeMessageCommand()
 * 
 * sends the GoodbyeMessage.
 */

export abstract class SendGoodbyeMessageCommand extends Command {

    constructor() {
        super();
    }

    /**
     * execute()
     * 
     * executes the operation.
     * @param email the email address to sned to
     * @throws any exception when an error occurs.
     */

    public abstract execute(email: EmailAddress): Promise<void>;
}