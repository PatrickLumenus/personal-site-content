import { State } from '@domeniere/common';
import { Entity } from '@domeniere/entity';
import { EmailAddress, MethodUndefinedException } from '@swindle/core';
import { SubscriberId, SubscriberName } from '../../values/values.well';
import { SubscriberProfileInterface } from './subscriber-profile.interface';

/**
 * SubscriberProfile
 * 
 * The profile of a subscriber.
 */

 export class SubscriberProfile extends Entity implements SubscriberProfileInterface {

    @State()
    private _email: EmailAddress;

    @State()
    private _name: SubscriberName;

    constructor(id: SubscriberId, name: SubscriberName, email: EmailAddress) {
        super(id);
        this._email = email;
        this._name = name;
    }

     /**
      * email()
      * 
      * gets the susbscriber email address.
      */

    public email(): EmailAddress {
        return this._email;
    }

    public equals(suspect: any): boolean {
        let isEquals = false;

        if (suspect instanceof SubscriberProfile) {
            const other = suspect as SubscriberProfile;
            isEquals = this.id().equals(other.id());
        }

        return isEquals;
    }

    /**
     * name()
     * 
     * gets the subscriber name.
     */

    public name(): SubscriberName {
        return this._name;
     }

    public serializeData(): string {
        return JSON.stringify({
            email: this.email().toString(),
            name: this.name().serialize(),
        });
    }

     /**
      * setEmailAddress()
      * 
      * sets the email address.
      * @param email the email address to set.
      */

    public setEmail(email: EmailAddress): void {
        this._email = email;
        this.commitStateChanges();
    }

    /**
     * setName()
     * 
     * sets the subscriber name.
     * @param newName the new name to set.
     */
    
    public setName(newName: SubscriberName): void {
        this._name = newName;
        this.commitStateChanges();
    }
}