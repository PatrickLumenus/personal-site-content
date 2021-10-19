import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { MessageSubjectException } from '../../exceptions/exceptions.well';
import { MessageSubjectInterface } from './message-subject.interface';

/**
 * MessageSubject
 * 
 * The message subject.
 */

 export class MessageSubject extends Value implements MessageSubjectInterface {

    private readonly _sub: string;

    /**
     * Creates a MessageSubject instance.
     * @param subject the subject.
     * @throws MessageSubjectException when the message subject is invalid.
     */
    constructor(subject: string) {
        super();

        if (subject.length === 0) {
            throw new MessageSubjectException();
        }
        this._sub = subject;
    }

    public equals(suspect: any): boolean {
        let isEqual = false;

        if (suspect instanceof MessageSubject) {
            const other = suspect as MessageSubject;
            isEqual = this.subject() === other.subject();
        }

        return isEqual;
    }

    public serialize(): string {
        return this.subject();
    }

     /**
      * subject()
      * 
      * gets the message subject.
      */

    public subject(): string {
        return this._sub;
    }
}