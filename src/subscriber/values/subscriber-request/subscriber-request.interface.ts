import { EmailAddress } from "@swindle/core";


export interface SubscriberRequestInterface {
    
    /**
     * email()
     * 
     * gets the email address.
     */

    email(): EmailAddress;
}