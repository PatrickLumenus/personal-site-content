import { EventStore } from "@domeniere/event";


export abstract class ContentEventStore extends EventStore {

    constructor() {
        super();
    }
}