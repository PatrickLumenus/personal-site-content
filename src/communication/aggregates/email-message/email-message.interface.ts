import { EmailAddress } from "@swindle/core";
import { 
    MessageContentInterface,
    MessageSenderNameInterface, 
    MessageSubjectInterface 
} from "../../values/values.well";


export interface EmailMessageInterface {

    /**
     * content()
     * 
     * gets the content.
     */

    content(): MessageContentInterface;

    /**
     * email()
     * 
     * gets the email address.
     */

    email(): EmailAddress;
    
    /**
     * name()
     * 
     * gets the name of the sender.
     */

    name(): MessageSenderNameInterface;

    /**
     * subject()
     * 
     * gets the message subject.
     */

    subject(): MessageSubjectInterface;
}