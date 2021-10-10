"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSubscriberCommand = void 0;
const service_1 = require("@domeniere/service");
const events_well_1 = require("../events/events.well");
const exceptions_well_1 = require("../exceptions/exceptions.well");
/**
 * RemoveSubscriberCommand
 *
 * Removes a subscriber.
 */
class RemoveSubscriberCommand extends service_1.Command {
    constructor(subscriberRepository) {
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
    async execute(email) {
        // get the subscriber.
        let subscriber = null;
        try {
            subscriber = await this.subscriberRepository.findByEmail(email);
        }
        catch (e) {
            throw new exceptions_well_1.SubscriberRepositoryException(e.message);
        }
        if (!subscriber) {
            throw new exceptions_well_1.SubscriberNotFoundException();
        }
        // delete the subscriber.
        subscriber.delete();
        try {
            await this.subscriberRepository.remove(subscriber);
            subscriber.confirmStateChanges();
            await this.emit(new events_well_1.SubscriberDeleted(subscriber));
        }
        catch (e) {
            subscriber.rollbackStateChanges();
            throw new exceptions_well_1.SubscriberRepositoryException(e.message);
        }
    }
}
exports.RemoveSubscriberCommand = RemoveSubscriberCommand;
