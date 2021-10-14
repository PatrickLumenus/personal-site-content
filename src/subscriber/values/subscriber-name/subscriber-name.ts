import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { SubscriberNameException } from '../../exceptions/exceptions.well';
import { SubscriberNameInterface } from './subscriber-name.interface';

/**
 * SubscriberName
 * 
 * The name of the subscriber.
 */

 export class SubscriberName extends Value implements SubscriberNameInterface {

    private static MAX_LENGTH = 60;

    private readonly _name: string;

    /**
     * creates a SubscriberName instance.
     * @param name the name to set.
     * @throws SubscriberNameException when the subscriber name is invalid.
     */

    constructor(name: string) {
        super();

        if ((name.length < 1) || (name.length > SubscriberName.MAX_LENGTH)) {
            throw new SubscriberNameException();
        }

        this._name = name;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof SubscriberName) {
            const other = suspect as SubscriberName;
            isEqual = this.name() === other.name();
        }

        return isEqual;
    }

    /**
     * name()
     * 
     * gets the name.
     */

    public name(): string {
        return this._name;
    }

    public serialize(): string {
        return this.name();
    }
}