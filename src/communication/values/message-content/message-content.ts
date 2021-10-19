import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { MessageContentException } from '../../exceptions/exceptions.well';
import { MessageContentInterface } from './message-content.interface';

/**
 * MessageContent
 * 
 * The content of the message.
 */

 export class MessageContent extends Value implements MessageContentInterface {

    private readonly _content: string;

    /**
     * Creates an instance of MessageContent
     * @param content the content.
     * @throws MessageContentException when the content is invalid.
     */

    constructor(content: string) {
        super();

        if (content.length === 0) {
            throw new MessageContentException();
        }
        this._content = content;
    }

     /**
      * content()
      * 
      * gets the content of the message.
      */

    public content(): string {
        return this._content;
     }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof MessageContent) {
            const other = suspect as MessageContent;
            isEqual = this.content() === other.content();
        }

        return isEqual;
    }

    public serialize(): string {
        return this.content();
    }
}