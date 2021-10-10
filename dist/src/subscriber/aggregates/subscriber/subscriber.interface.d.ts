import { EmailAddress } from "@swindle/core";
export interface SubscriberInterface {
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
//# sourceMappingURL=subscriber.interface.d.ts.map