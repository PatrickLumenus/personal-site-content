import { Module } from '@domeniere/module';
import { 
    SendGoodbyeMessageCommand, 
    SendWelcomeMessageCommand 
} from './services/services.well';


export default class CommunicationModule extends Module {
    constructor() {
        super('communication');
    }

    protected createdBindings() {
        // register module bindings here.
        this.bindServiceInstance(SendWelcomeMessageCommand);
        this.bindServiceInstance(SendGoodbyeMessageCommand);
    }
}

// module well exports go here.
export * from "./services/services.well";