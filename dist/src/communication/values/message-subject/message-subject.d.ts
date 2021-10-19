import { Value } from '@domeniere/value';
import { MessageSubjectInterface } from './message-subject.interface';
/**
 * MessageSubject
 *
 * The message subject.
 */
export declare class MessageSubject extends Value implements MessageSubjectInterface {
    private readonly _sub;
    /**
     * Creates a MessageSubject instance.
     * @param subject the subject.
     * @throws MessageSubjectException when the message subject is invalid.
     */
    constructor(subject: string);
    equals(suspect: any): boolean;
    serialize(): string;
    /**
     * subject()
     *
     * gets the message subject.
     */
    subject(): string;
}
//# sourceMappingURL=message-subject.d.ts.map