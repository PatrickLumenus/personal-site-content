import { AbstractFactory } from '@domeniere/factory';
import { Subscriber } from '../../aggregates/aggregates.well';
import { SubscriberData } from '../../data/data.well';
import { SubscriberDataFactoryInterface } from './subscriber-data-factory.interface';
export declare class SubscriberDataFactory extends AbstractFactory implements SubscriberDataFactoryInterface {
    constructor();
    /**
     * createFromObject()
     *
     * creates a SubscriberData instance from an object.
     * @param object the object to derive from
     */
    createFromObject(object: Subscriber): SubscriberData;
}
//# sourceMappingURL=subscriber-data.factory.d.ts.map