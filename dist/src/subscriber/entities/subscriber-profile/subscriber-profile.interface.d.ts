import { EmailAddress } from "@swindle/core";
import { SubscriberNameInterface } from "../../values/values.well";
export interface SubscriberProfileInterface {
    /**
     * email()
     *
     * gets the susbscriber email address.
     */
    email(): EmailAddress;
    /**
     * name()
     *
     * gets the subscriber name.
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
     * sets the subscriber name.
     * @param newName the new name to set.
     */
    setName(newName: SubscriberNameInterface): void;
}
//# sourceMappingURL=subscriber-profile.interface.d.ts.map