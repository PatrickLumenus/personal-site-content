import { Module } from '@domeniere/module';
import { 
    SubscriberDataFactory, 
    SubscriberFactory 
} from './factories/factories.well';
import { SubscriberRepository } from './repositories/repositories.well';
import { 
    CreateSubscriberCommand, 
    RemoveSubscriberCommand 
} from './services/services.well';


export default class SubscriberModule extends Module {
    constructor() {
        super('subscriber');
    }

    protected createdBindings() {
        // register module bindings here.

        // factories
        this.bindFactory(SubscriberDataFactory, (_) => new SubscriberDataFactory());
        this.bindFactory(SubscriberFactory, (_) => new SubscriberFactory());

        // repositories
        this.bindRepository(SubscriberRepository);

        // services
        this.bindService(CreateSubscriberCommand, (module) => {
            return new CreateSubscriberCommand(
                module.get(SubscriberFactory),
                module.get(SubscriberRepository)
            );
        });
        this.bindService(RemoveSubscriberCommand, (module) => {
            return new RemoveSubscriberCommand(module.get(SubscriberRepository));
        })
    }
}

// module well exports go here.
export * from "./values/values.well";
export * from "./exceptions/exceptions.well";
export * from "./entities/entities.well";
export * from "./aggregates/aggregates.well";
export * from "./data/data.well";
export * from "./factories/factories.well";
export * from "./repositories/repositories.well";
export * from "./services/services.well";
export * from "./events/events.well";