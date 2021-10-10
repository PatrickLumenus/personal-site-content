import { Entity } from '@domeniere/entity';
import { EmailAddress } from '@swindle/core';
import { SubscriberId } from '../../values/values.well';
import { SubscriberProfileInterface } from './subscriber-profile.interface';
/**
 * SubscriberProfile
 *
 * The profile of a subscriber.
 */
export declare class SubscriberProfile extends Entity implements SubscriberProfileInterface {
    private _email;
    constructor(id: SubscriberId, email: EmailAddress);
    /**
     * email()
     *
     * gets the susbscriber email address.
     */
    email(): EmailAddress;
    equals(suspect: any): boolean;
    serializeData(): string;
    /**
     * setEmailAddress()
     *
     * sets the email address.
     * @param email the email address to set.
     */
    setEmail(email: EmailAddress): void;
}
//# sourceMappingURL=subscriber-profile.d.ts.map