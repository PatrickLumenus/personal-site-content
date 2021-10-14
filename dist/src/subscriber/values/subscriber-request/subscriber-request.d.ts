import { Value } from '@domeniere/value';
import { EmailAddress } from '@swindle/core';
import { SubscriberRequestInterface } from './subscriber-request.interface';
/**
 * SubscriberRequest
 *
 * A subscriber request
 */
export declare class SubscriberRequest extends Value implements SubscriberRequestInterface {
    private readonly _email;
    private readonly _name;
    constructor(name: string, email: EmailAddress);
    /**
     * email()
     *
     * gets the email address.
     */
    email(): EmailAddress;
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * gets the name of the subscriber.
     */
    name(): string;
    serialize(): string;
}
//# sourceMappingURL=subscriber-request.d.ts.map