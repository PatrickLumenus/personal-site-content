import { Value } from '@domeniere/value';
import { MessageSenderNameException } from '../../exceptions/exceptions.well';
import { MessageSenderNameInterface } from './message-sender-name.interface';

/**
 * MessageSenderName
 * 
 * The message sender name.
 */

 export class MessageSenderName extends Value implements MessageSenderNameInterface {

    private readonly _name: string;

    /**
     * Creates a MessageSenderName instance.
     * @param name the name
     * @throws MessageSenderNameException when the sender name is invalid.
     */
    constructor(name: string) {
        super();
        
        if (name.length === 0) {
            throw new MessageSenderNameException();
        }
        this._name = name;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof MessageSenderName) {
            const other = suspect as MessageSenderName;
            isEqual = this.name() === other.name();
        }

        return isEqual;
    }

     /**
      * name()
      * 
      * gets the name of the message sender.
      */

    public name(): string {
        return this._name;
    }

    public serialize(): string {
        return this.name();
    }
}