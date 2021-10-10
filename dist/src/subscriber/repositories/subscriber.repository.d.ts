import { Repository } from '@domeniere/repository';
import { EmailAddress } from '@swindle/core';
import { Subscriber } from '../aggregates/aggregates.well';
export declare abstract class SubscriberRepository extends Repository {
    constructor();
    /**
     * findByEmail()
     *
     * finds a subscriber by its email address.
     * @param email the email address to search for.
     */
    abstract findByEmail(email: EmailAddress): Promise<Subscriber | null>;
    abstract remove(subscriber: Subscriber): Promise<void>;
    abstract save(subscriber: Subscriber): Promise<void>;
    abstract size(): Promise<number>;
}
//# sourceMappingURL=subscriber.repository.d.ts.map