import { Value } from '@domeniere/value';
import { UUID } from '@swindle/core';
import { SubscriberIdException } from '../../exceptions/exceptions.well';
import { SubscriberIdInterface } from './subscriber-id.interface';

/**
 * SubscriberId
 * 
 * A subscriber id.
 */

 export class SubscriberId extends Value implements SubscriberIdInterface {

    private readonly _id: string;

    constructor(id: string) {
        super();

        if (!id) {
            throw new SubscriberIdException();
        }
        this._id = id;
    }

    /**
     * Generate()
     * 
     * generates a SubscriberId
     * @returns the generated Subscriber Id.
     */

    public static Generate(): SubscriberId {
        return new SubscriberId(UUID.V4().id());
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof SubscriberId) {
            const other = suspect as SubscriberId;
            isEqual = this.id() === other.id();
        }

        return isEqual;
    }

    public id(): string {
        return this._id;
    }

    public serialize(): string {
        return this.id();
    }
}