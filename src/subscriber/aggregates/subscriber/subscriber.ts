import { TimestampedAggregate } from '@domeniere/aggregate';
import { DateTime, EmailAddress, MethodUndefinedException } from '@swindle/core';
import { SubscriberProfile } from '../../entities/entities.well';
import { SubscriberInterface } from './subscriber.interface';

/**
 * Subscriber
 * 
 * A subscriber.
 */

export class Subscriber extends TimestampedAggregate implements SubscriberInterface {

    constructor(
        root: SubscriberProfile, 
        version: number|undefined = 1.0, 
        createdOn: DateTime = DateTime.Now(), 
        updatedOn: DateTime = DateTime.Now(), 
        deletedOn: DateTime|null = null
    ) {
        super(root, version, createdOn, updatedOn, deletedOn);
    }

    /**
     * email()
     * 
     * gets the subscriber email address
     */

    public email(): EmailAddress {
        return this.root().email();
    }


    public equals(suspect: any): boolean {

        let isEquals = false;

        if (suspect instanceof Subscriber) {
            const other = suspect as Subscriber;
            isEquals = this.id().equals(other.id());
        }

        return isEquals;
    }

    protected root(): SubscriberProfile {
        return super.root() as SubscriberProfile;
    }

    protected serializeData(): string {
        return JSON.stringify({
            
        });
    }

    /**
     * setEmailAddress()
     * 
     * sets the email address.
     * @param email the email address to set.
     */

    public setEmail(email: EmailAddress): void {
        this.root().setEmail(email);
        this.commitStateChanges();
    }
}