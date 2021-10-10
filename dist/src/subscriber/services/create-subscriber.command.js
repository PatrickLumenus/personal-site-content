"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriberCommand = void 0;
const service_1 = require("@domeniere/service");
const exceptions_well_1 = require("../exceptions/exceptions.well");
const events_well_1 = require("../events/events.well");
/**
 * CreateSubscriber
 *
 * Creates a subscriber
 */
class CreateSubscriberCommand extends service_1.Command {
    constructor(subscriberFactory, subscriberRepository) {
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
    async execute(request) {
        // make sure a subscriber with the same email does not already exist.
        let existingSubscriber = null;
        try {
            existingSubscriber = await this.subscriberRepository.findByEmail(request.email());
        }
        catch (e) {
            throw new exceptions_well_1.SubscriberRepositoryException(e.message);
        }
        if (existingSubscriber) {
            throw new exceptions_well_1.EmailAlreadyInUseException();
        }
        // create the repository
        const subscriber = this.subscriberFactory.createFromRequest(request);
        try {
            await this.subscriberRepository.save(subscriber);
            await this.emit(new events_well_1.SubscriberCreated(subscriber));
        }
        catch (e) {
            throw new exceptions_well_1.SubscriberRepositoryException(e.message);
        }
    }
}
exports.CreateSubscriberCommand = CreateSubscriberCommand;
