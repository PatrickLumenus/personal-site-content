import { EmailAddress } from "@swindle/core";


export interface SubscriberRequestInterface {
    
    /**
     * email()
     * 
     * gets the email address.
     */

    email(): EmailAddress;

    /**
     * name()
     * 
     * gets the name of the subscriber.
     */
    
    name(): string;
}