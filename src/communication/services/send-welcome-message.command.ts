import { Command } from '@domeniere/service';
import { EmailAddress } from '@swindle/core';

/**
 * SendWelcomeMessageCommand
 * 
 * Sends the welcome message to the specified email address
 */

export abstract class SendWelcomeMessageCommand extends Command {

    constructor() {
        super();
    }

    /**
     * execute()
     * 
     * executes the operation.
     * @param email the email to send the message to.
     */
    
    public abstract execute(email: EmailAddress): Promise<void>;
}