import { EmailAddress } from "@swindle/core";
export interface SubscriberProfileInterface {
    /**
     * email()
     *
     * gets the susbscriber email address.
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
//# sourceMappingURL=subscriber-profile.interface.d.ts.map