import { AbstractFactory } from '@domeniere/factory';
import { Subscriber } from '../../aggregates/aggregates.well';
import { SubscriberProfile } from '../../entities/entities.well';
import { SubscriberId, SubscriberRequest } from '../../values/values.well';
import { SubscriberFactoryInterface } from './subscriber-factory.interface';


export class SubscriberFactory extends AbstractFactory implements SubscriberFactoryInterface {
    
    constructor() {
        super();
    }

    /**
     * createFromRequest()
     * 
     * creates a Subscribeer from a request object.
     * @param request the subscriber request to derive from
     */

    public createFromRequest(request: SubscriberRequest): Subscriber {
        return new Subscriber(
            new SubscriberProfile(SubscriberId.Generate(), request.email())
        );
    }
}