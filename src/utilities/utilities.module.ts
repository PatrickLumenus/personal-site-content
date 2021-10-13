import { Module } from '@domeniere/module';
import { HandleErrorEventsCommand } from './services/services.well';


export default class UtilitiesModule extends Module {
    constructor() {
        super('utilities');
    }

    protected createdBindings() {
        // register module bindings here.
        this.bindServiceInstance(HandleErrorEventsCommand);
    }
}

// module well exports go here.
export * from "./services/services.well";
export * from "./events/events.well";