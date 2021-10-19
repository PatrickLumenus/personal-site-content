import { Module } from '@domeniere/module';
import { EmailMessageFactory } from './factories/factories.well';
import { 
    SendEmailMessageCommand,
    SendGoodbyeMessageCommand, 
    SendWelcomeMessageCommand 
} from './services/services.well';


export default class CommunicationModule extends Module {
    constructor() {
        super('communication');
    }

    protected createdBindings() {
        // register module bindings here.

        // factories
        this.bindFactory(EmailMessageFactory, (_) => new EmailMessageFactory());

        // services
        this.bindServiceInstance(SendWelcomeMessageCommand);
        this.bindServiceInstance(SendGoodbyeMessageCommand);
        this.bindServiceInstance(SendEmailMessageCommand);
    }
}

// module well exports go here.
export * from "./services/services.well";
export * from "./values/values.well";
export * from "./exceptions/exceptions.well";
export * from "./entities/entities.well";
export * from "./aggregates/aggregates.well";
export * from "./data/data.well";
export * from "./factories/factories.well";
export * from "./events/events.well";