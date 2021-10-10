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
    constructor(email: EmailAddress);
    /**
     * email()
     *
     * gets the email address.
     */
    email(): EmailAddress;
    equals(suspect: any): boolean;
    serialize(): string;
}
//# sourceMappingURL=subscriber-request.d.ts.map