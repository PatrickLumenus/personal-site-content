import { Entity } from '@domeniere/entity';
import { MessageSenderEmail, MessageSenderName, MessageSubject } from '../../values/values.well';
import { SenderDetailsInterface } from './sender-details.interface';
/**
 * SenderDetails
 *
 * The sender details.
 */
export declare class SenderDetails extends Entity implements SenderDetailsInterface {
    private _name;
    private _subject;
    constructor(id: MessageSenderEmail, name: MessageSenderName, subject: MessageSubject);
    equals(suspect: any): boolean;
    id(): MessageSenderEmail;
    /**
     * name()
     *
     * gets the name of the sender.
     */
    name(): MessageSenderName;
    serializeData(): string;
    /**
     * subject()
     *
     * the message subject
     */
    subject(): MessageSubject;
}
//# sourceMappingURL=sender-details.d.ts.map