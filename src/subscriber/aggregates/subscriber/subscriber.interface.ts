import { EmailAddress } from "@swindle/core";
import { SubscriberNameInterface } from "../../values/values.well";


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
     * name()
     * 
     * gets the name of the subscriber.
     */

    name(): SubscriberNameInterface;

    /**
     * setEmailAddress()
     * 
     * sets the email address.
     * @param email the email address to set.
     */
    
    setEmail(email: EmailAddress): void;

    /**
     * setName()
     * 
     * sets the name of the subsriber.
     * @param newName the name to set.
     */

    setName(newName: SubscriberNameInterface): void;
}