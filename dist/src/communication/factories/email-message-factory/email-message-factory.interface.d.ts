import { EmailMessage } from "../../aggregates/aggregates.well";
import { EmailMessageData } from "../../data/data.well";
/**
 * EmailMessageFactoryInterface
 */
export interface EmailMessageFactoryInterface {
    /**
     * createFromData()
     *
     * creates an email message from data.
     * @param data the data to derive.
     */
    createFromData(data: EmailMessageData): EmailMessage;
}
//# sourceMappingURL=email-message-factory.interface.d.ts.map