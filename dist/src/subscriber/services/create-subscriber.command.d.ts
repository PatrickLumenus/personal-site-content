import { Command } from '@domeniere/service';
import { SubscriberRepository } from '../repositories/repositories.well';
import { SubscriberRequest } from '../values/values.well';
import { SubscriberFactory } from '../factories/factories.well';
/**
 * CreateSubscriber
 *
 * Creates a subscriber
 */
export declare class CreateSubscriberCommand extends Command {
    private readonly subscriberRepository;
    private readonly subscriberFactory;
    constructor(subscriberFactory: SubscriberFactory, subscriberRepository: SubscriberRepository);
    /**
     * execute()
     *
     * exexues the operation.
     * @param request the request to create the subscriber from
     * @emits SubscriberCreated upon successfully creating the subscriber.
     * @throws SubscriberRepositoryException when there is an error with the repository.
     * @throws EmailAlreadyInUseException when the requester email is already used by someone else.
     */
    execute(request: SubscriberRequest): Promise<void>;
}
//# sourceMappingURL=create-subscriber.command.d.ts.map