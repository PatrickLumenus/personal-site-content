import { Command } from '@domeniere/service';
import { Subscriber } from '../aggregates/aggregates.well';
import { SubscriberRepository } from '../repositories/repositories.well';
import { 
    EmailAlreadyInUseException, 
    SubscriberRepositoryException 
} from '../exceptions/exceptions.well';
import { SubscriberRequest } from '../values/values.well';
import { SubscriberFactory } from '../factories/factories.well';
import { SubscriberCreated } from '../events/events.well';

/**
 * CreateSubscriber
 * 
 * Creates a subscriber
 */

export class CreateSubscriberCommand extends Command {

    private readonly subscriberRepository: SubscriberRepository;
    private readonly subscriberFactory: SubscriberFactory;

    constructor(
        subscriberFactory: SubscriberFactory,
        subscriberRepository: SubscriberRepository
    ) {
        super();
        this.subscriberRepository = subscriberRepository;
        this.subscriberFactory = subscriberFactory;
    }

    /**
     * execute()
     * 
     * exexues the operation.
     * @param request the request to create the subscriber from
     * @emits SubscriberCreated upon successfully creating the subscriber.
     * @throws SubscriberRepositoryException when there is an error with the repository.
     * @throws EmailAlreadyInUseException when the requester email is already used by someone else.
     */

    public async execute(request: SubscriberRequest): Promise<void> {
        
        // make sure a subscriber with the same email does not already exist.
        let existingSubscriber: Subscriber|null = null;

        try {
            existingSubscriber = await this.subscriberRepository.findByEmail(request.email());
        }
        catch(e) {
            throw new SubscriberRepositoryException((e as Error).message);
        }

        if (existingSubscriber) {
            throw new EmailAlreadyInUseException();
        }

        // create the repository
        const subscriber = this.subscriberFactory.createFromRequest(request);

        try {
            await this.subscriberRepository.save(subscriber);
            await this.emit(new SubscriberCreated(subscriber));
        }
        catch(e) {
            throw new SubscriberRepositoryException((e as Error).message);
        }
    }
}