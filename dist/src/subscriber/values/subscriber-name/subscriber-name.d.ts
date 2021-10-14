import { Value } from '@domeniere/value';
import { SubscriberNameInterface } from './subscriber-name.interface';
/**
 * SubscriberName
 *
 * The name of the subscriber.
 */
export declare class SubscriberName extends Value implements SubscriberNameInterface {
    private static MAX_LENGTH;
    private readonly _name;
    /**
     * creates a SubscriberName instance.
     * @param name the name to set.
     * @throws SubscriberNameException when the subscriber name is invalid.
     */
    constructor(name: string);
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * gets the name.
     */
    name(): string;
    serialize(): string;
}
//# sourceMappingURL=subscriber-name.d.ts.map