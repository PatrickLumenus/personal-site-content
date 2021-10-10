import { Subscriber } from "../../aggregates/aggregates.well";
import { SubscriberData } from "../../data/data.well";
export interface SubscriberDataFactoryInterface {
    /**
     * createFromObject()
     *
     * creates a SubscriberData instance from an object.
     * @param object the object to derive from
     */
    createFromObject(object: Subscriber): SubscriberData;
}
//# sourceMappingURL=subscriber-data-factory.interface.d.ts.map