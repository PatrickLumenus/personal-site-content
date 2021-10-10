import { Repository } from '@domeniere/repository';
import { EmailAddress } from '@swindle/core';
import { Subscriber } from '../aggregates/aggregates.well';

export abstract class SubscriberRepository extends Repository {

    constructor() {
        super();
    }

    /**
     * findByEmail()
     * 
     * finds a subscriber by its email address.
     * @param email the email address to search for.
     */

    public abstract findByEmail(email: EmailAddress): Promise<Subscriber|null>;

    public abstract remove(subscriber: Subscriber): Promise<void>;

    public abstract save(subscriber: Subscriber): Promise<void>;

    public abstract size(): Promise<number>;
}