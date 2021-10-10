import { Command } from '@domeniere/service';
import { EmailAddress } from '@swindle/core';
import { SubscriberRepository } from '../repositories/repositories.well';
/**
 * RemoveSubscriberCommand
 *
 * Removes a subscriber.
 */
export declare class RemoveSubscriberCommand extends Command {
    private readonly subscriberRepository;
    constructor(subscriberRepository: SubscriberRepository);
    /**
     * execute()
     *
     * executes the operation.
     * @param email the email address of the subscriber to delete.
     * @emits SubscriberDeleted upon successfully deleting the subscriber.
     * @throws SubscriberRepositoryException when there is an error with the subscriber repository.
     * @throws SubscriberNotFoundException when the subscriber cannot be found.
     */
    execute(email: EmailAddress): Promise<void>;
}
//# sourceMappingURL=remove-subscriber.command.d.ts.map