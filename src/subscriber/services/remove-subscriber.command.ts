import { Command } from '@domeniere/service';
import { EmailAddress } from '@swindle/core';
import { Subscriber } from '../aggregates/aggregates.well';
import { SubscriberDeleted } from '../events/events.well';
import { 
    SubscriberNotFoundException, 
    SubscriberRepositoryException 
} from '../exceptions/exceptions.well';
import { SubscriberRepository } from '../repositories/repositories.well';

/**
 * RemoveSubscriberCommand
 * 
 * Removes a subscriber.
 */

export class RemoveSubscriberCommand extends Command {

    private readonly subscriberRepository: SubscriberRepository;

    constructor(subscriberRepository: SubscriberRepository) {
        super();
        this.subscriberRepository = subscriberRepository;
    }

    /**
     * execute()
     * 
     * executes the operation.
     * @param email the email address of the subscriber to delete.
     * @emits SubscriberDeleted upon successfully deleting the subscriber.
     * @throws SubscriberRepositoryException when there is an error with the subscriber repository.
     * @throws SubscriberNotFoundException when the subscriber cannot be found.
     */

    public async execute(email: EmailAddress): Promise<void> {
        // get the subscriber.
        let subscriber: Subscriber|null = null;

        try {
            subscriber = await this.subscriberRepository.findByEmail(email);
        }
        catch(e) {
            throw new SubscriberRepositoryException((e as Error).message);
        }

        if (!subscriber) {
            throw new SubscriberNotFoundException();
        }

        // delete the subscriber.
        subscriber.delete();

        try {
            await this.subscriberRepository.remove(subscriber);
            subscriber.confirmStateChanges();
            await this.emit(new SubscriberDeleted(subscriber));
        }
        catch(e) {
            subscriber.rollbackStateChanges();
            throw new SubscriberRepositoryException((e as Error).message);
        }
    }
}