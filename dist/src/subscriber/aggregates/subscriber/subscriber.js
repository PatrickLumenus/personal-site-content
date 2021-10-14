"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
const aggregate_1 = require("@domeniere/aggregate");
const core_1 = require("@swindle/core");
/**
 * Subscriber
 *
 * A subscriber.
 */
class Subscriber extends aggregate_1.TimestampedAggregate {
    constructor(root, version = 1.0, createdOn = core_1.DateTime.Now(), updatedOn = core_1.DateTime.Now(), deletedOn = null) {
        super(root, version, createdOn, updatedOn, deletedOn);
    }
    /**
     * delete()
     *
     * deletes a subscriber.
     */
    delete() {
        this.setDeleted(core_1.DateTime.Now());
        this.commitStateChanges();
    }
    /**
     * email()
     *
     * gets the subscriber email address
     */
    email() {
        return this.root().email();
    }
    equals(suspect) {
        let isEquals = false;
        if (suspect instanceof Subscriber) {
            const other = suspect;
            isEquals = this.id().equals(other.id());
        }
        return isEquals;
    }
    /**
     * name()
     *
     * gets the name of the subscriber.
     */
    name() {
        return this.root().name();
    }
    root() {
        return super.root();
    }
    serializeData() {
        return JSON.stringify({});
    }
    /**
     * setEmailAddress()
     *
     * sets the email address.
     * @param email the email address to set.
     */
    setEmail(email) {
        this.root().setEmail(email);
        this.commitStateChanges();
    }
    /**
     * setName()
     *
     * sets the name of the subsriber.
     * @param newName the name to set.
     */
    setName(newName) {
        this.root().setName(newName);
        this.commitStateChanges();
    }
}
exports.Subscriber = Subscriber;
