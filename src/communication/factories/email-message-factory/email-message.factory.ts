import { AbstractFactory } from '@domeniere/factory';
import { EmailMessage } from '../../aggregates/aggregates.well';
import { EmailMessageData } from '../../data/data.well';
import { SenderDetails } from '../../entities/entities.well';
import { MessageContent, MessageSenderEmail, MessageSenderName, MessageSubject } from '../../values/values.well';
import { EmailMessageFactoryInterface } from './email-message-factory.interface';

/**
 * EmailMessageFactory
 * 
 * An email message factory.
 */

export class EmailMessageFactory extends AbstractFactory implements EmailMessageFactoryInterface {
    
    constructor() {
        super();
    }

    /**
     * createFromData()
     * 
     * creates an email message from data.
     * @param data the data to derive.
     * @throws MessageSenderNameException when the sender name is invalid.
     * @throws MessageSubjectException when the message subject is invalid.
     * @throws MessageContentException when the content is invalid.
     */

    public createFromData(data: EmailMessageData): EmailMessage {
        return new EmailMessage(
            new SenderDetails(
                new MessageSenderEmail(data.email),
                new MessageSenderName(data.name),
                new MessageSubject(data.subject),
            ),
            new MessageContent(data.content)
        );
    }
}