import { EmailAddress } from "@swindle/core";


export interface SubscriberInterface {
    
    /**
     * delete()
     * 
     * deletes a subscriber.
     */

    delete(): void;

    /**
     * email()
     * 
     * gets the subscriber email address
     */

    email(): EmailAddress;

    /**
     * setEmailAddress()
     * 
     * sets the email address.
     * @param email the email address to set.
     */
    
    setEmail(email: EmailAddress): void;
}