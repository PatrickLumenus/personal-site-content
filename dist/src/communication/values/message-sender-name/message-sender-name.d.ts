import { Value } from '@domeniere/value';
import { MessageSenderNameInterface } from './message-sender-name.interface';
/**
 * MessageSenderName
 *
 * The message sender name.
 */
export declare class MessageSenderName extends Value implements MessageSenderNameInterface {
    private readonly _name;
    /**
     * Creates a MessageSenderName instance.
     * @param name the name
     * @throws MessageSenderNameException when the sender name is invalid.
     */
    constructor(name: string);
    equals(suspect: any): boolean;
    /**
     * name()
     *
     * gets the name of the message sender.
     */
    name(): string;
    serialize(): string;
}
//# sourceMappingURL=message-sender-name.d.ts.map