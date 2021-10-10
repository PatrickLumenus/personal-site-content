"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberCreated = void 0;
const event_1 = require("@domeniere/event");
const core_1 = require("@swindle/core");
/**
 * SubscriberCreated
 *
 * An event indicating that a subscriber bas been created.
 */
class SubscriberCreated extends event_1.DomainEvent {
    constructor(subscriber, occuredOn = core_1.DateTime.Now(), id = undefined) {
        super(occuredOn, id);
        this._sub = subscriber;
    }
    static EventClassification() {
        return 'content';
    }
    static EventName() {
        return 'subscriber-created';
    }
    static EventVersion() {
        return 1.0;
    }
    isError() {
        return false;
    }
    serializeData() {
        return JSON.stringify({
            subscriber: this.subscriber().serialize()
        });
    }
    shouldBeBroadcasted() {
        return true;
    }
    subscriber() {
        return this._sub;
    }
}
exports.SubscriberCreated = SubscriberCreated;
