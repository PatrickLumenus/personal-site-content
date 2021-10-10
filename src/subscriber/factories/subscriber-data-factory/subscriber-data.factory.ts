import { AbstractFactory } from '@domeniere/factory';
import { Subscriber } from '../../aggregates/aggregates.well';
import { SubscriberData } from '../../data/data.well';
import { SubscriberDataFactoryInterface } from './subscriber-data-factory.interface';


export class SubscriberDataFactory extends AbstractFactory implements SubscriberDataFactoryInterface {
    
    constructor() {
        super();
    }

    /**
     * createFromObject()
     * 
     * creates a SubscriberData instance from an object.
     * @param object the object to derive from
     */

    public createFromObject(object: Subscriber): SubscriberData {
        return new SubscriberData(object.id().id(), object.email().toString());
    }
}