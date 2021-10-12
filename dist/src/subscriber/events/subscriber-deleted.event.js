"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberDeleted = void 0;
const event_1 = require("@domeniere/event");
const core_1 = require("@swindle/core");
/**
 * SubscriberDeleted
 *
 * An event indicating a subscriber has been deleted.
 */
class SubscriberDeleted extends event_1.DomainEvent {
    constructor(subscriber, occuredOn = core_1.DateTime.Now(), id = undefined) {
        super(occuredOn, id);
        this._sub = subscriber;
    }
    static EventClassification() {
        return 'content';
    }
    static EventName() {
        return 'subscriber-deleted';
    }
    static EventVersion() {
        return 1.0;
    }
    isError() {
        return false;
    }
    serializeData() {
        return JSON.stringify({
            subscriber: this.subscriber().serialize(),
        });
    }
    shouldBeBroadcasted() {
        return true;
    }
    /**
     * subscriber()
     *
     * gets the deleted subscriber.
     * @returns the deleted subscriber
     */
    subscriber() {
        return this._sub;
    }
}
exports.SubscriberDeleted = SubscriberDeleted;
