import { Entity } from '@domeniere/entity';
import { EmailAddress } from '@swindle/core';
import { SubscriberId, SubscriberName } from '../../values/values.well';
import { SubscriberProfileInterface } from './subscriber-profile.interface';
/**
 * SubscriberProfile
 *
 * The profile of a subscriber.
 */
export declare class SubscriberProfile extends Entity implements SubscriberProfileInterface {
    private _email;
    private _name;
    constructor(id: SubscriberId, name: SubscriberName, email: EmailAddress);
    /**
     * email()
     *
     * gets the susbscriber email address.
     */
    email(): EmailAddress;
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * gets the subscriber name.
     */
    name(): SubscriberName;
    serializeData(): string;
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
    setName(newName: SubscriberName): void;
}
//# sourceMappingURL=subscriber-profile.d.ts.map