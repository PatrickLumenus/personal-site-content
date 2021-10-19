import { AbstractFactory } from '@domeniere/factory';
import { EmailMessage } from '../../aggregates/aggregates.well';
import { EmailMessageData } from '../../data/data.well';
import { EmailMessageFactoryInterface } from './email-message-factory.interface';
/**
 * EmailMessageFactory
 *
 * An email message factory.
 */
export declare class EmailMessageFactory extends AbstractFactory implements EmailMessageFactoryInterface {
    constructor();
    /**
     * createFromData()
     *
     * creates an email message from data.
     * @param data the data to derive.
     * @throws MessageSenderNameException when the sender name is invalid.
     * @throws MessageSubjectException when the message subject is invalid.
     * @throws MessageContentException when the content is invalid.
     */
    createFromData(data: EmailMessageData): EmailMessage;
}
//# sourceMappingURL=email-message.factory.d.ts.map