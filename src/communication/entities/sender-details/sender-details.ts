import { State } from '@domeniere/common';
import { Entity } from '@domeniere/entity';
import { 
    MessageSenderEmail, 
    MessageSenderName, 
    MessageSubject
} from '../../values/values.well';
import { SenderDetailsInterface } from './sender-details.interface';

/**
 * SenderDetails
 * 
 * The sender details.
 */

 export class SenderDetails extends Entity implements SenderDetailsInterface {

    @State()
    private _name: MessageSenderName;

    @State()
    private _subject: MessageSubject;

    constructor(
        id: MessageSenderEmail,
        name: MessageSenderName,
        subject: MessageSubject,
    ) {
        super(id);
        this._name = name;
        this._subject = subject;
    }

    public equals(suspect: any): boolean {
        let isEquals = false;

        if (suspect instanceof SenderDetails) {
            const other = suspect as SenderDetails;
            isEquals = this.id().equals(other.id());
        }

        return isEquals;
    }

    public id(): MessageSenderEmail {
        return super.id() as MessageSenderEmail;
    }

     /**
      * name()
      * 
      * gets the name of the sender.
      */

    public name(): MessageSenderName {
        return this._name;
    }

    public serializeData(): string {
        return JSON.stringify({
            name: this.name().serialize(),
            subject: this.subject().serialize(),
        })
    }

     /**
      * subject()
      * 
      * the message subject
      */

    public subject(): MessageSubject {
        return this._subject;
    }
}