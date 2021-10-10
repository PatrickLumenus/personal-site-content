import { Subscriber } from "../../aggregates/aggregates.well";
import { SubscriberRequest } from "../../values/values.well";
export interface SubscriberFactoryInterface {
    /**
     * createFromRequest()
     *
     * creates a Subscribeer from a request object.
     * @param request the subscriber request to derive from
     */
    createFromRequest(request: SubscriberRequest): Subscriber;
}
//# sourceMappingURL=subscriber-factory.interface.d.ts.map