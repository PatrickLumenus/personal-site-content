import { AbstractFactory } from '@domeniere/factory';
import { Subscriber } from '../../aggregates/aggregates.well';
import { SubscriberRequest } from '../../values/values.well';
import { SubscriberFactoryInterface } from './subscriber-factory.interface';
export declare class SubscriberFactory extends AbstractFactory implements SubscriberFactoryInterface {
    constructor();
    /**
     * createFromRequest()
     *
     * creates a Subscribeer from a request object.
     * @param request the subscriber request to derive from
     */
    createFromRequest(request: SubscriberRequest): Subscriber;
}
//# sourceMappingURL=subscriber.factory.d.ts.map