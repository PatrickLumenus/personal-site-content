import { Value } from '@domeniere/value';
import { MessageContentInterface } from './message-content.interface';
/**
 * MessageContent
 *
 * The content of the message.
 */
export declare class MessageContent extends Value implements MessageContentInterface {
    private readonly _content;
    /**
     * Creates an instance of MessageContent
     * @param content the content.
     * @throws MessageContentException when the content is invalid.
     */
    constructor(content: string);
    /**
     * content()
     *
     * gets the content of the message.
     */
    content(): string;
    equals(suspect: any): boolean;
    serialize(): string;
}
//# sourceMappingURL=message-content.d.ts.map