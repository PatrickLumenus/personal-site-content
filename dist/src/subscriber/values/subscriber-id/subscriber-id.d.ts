import { Value } from '@domeniere/value';
import { SubscriberIdInterface } from './subscriber-id.interface';
/**
 * SubscriberId
 *
 * A subscriber id.
 */
export declare class SubscriberId extends Value implements SubscriberIdInterface {
    private readonly _id;
    constructor(id: string);
    /**
     * Generate()
     *
     * generates a SubscriberId
     * @returns the generated Subscriber Id.
     */
    static Generate(): SubscriberId;
    equals(suspect: any): boolean;
    id(): string;
    serialize(): string;
}
//# sourceMappingURL=subscriber-id.d.ts.map