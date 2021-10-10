import { TimestampedAggregate } from '@domeniere/aggregate';
import { DateTime, EmailAddress } from '@swindle/core';
import { SubscriberProfile } from '../../entities/entities.well';
import { SubscriberInterface } from './subscriber.interface';
/**
 * Subscriber
 *
 * A subscriber.
 */
export declare class Subscriber extends TimestampedAggregate implements SubscriberInterface {
    constructor(root: SubscriberProfile, version?: number | undefined, createdOn?: DateTime, updatedOn?: DateTime, deletedOn?: DateTime | null);
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
    equals(suspect: any): boolean;
    protected root(): SubscriberProfile;
    protected serializeData(): string;
    /**
     * setEmailAddress()
     *
     * sets the email address.
     * @param email the email address to set.
     */
    setEmail(email: EmailAddress): void;
}
//# sourceMappingURL=subscriber.d.ts.map