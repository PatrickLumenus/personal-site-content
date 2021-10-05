import { Api } from '@domeniere/core';
import { ContentEventStore } from './content.eventstore';


export class ContentApi extends Api {

    constructor(eventStore: ContentEventStore) {
        super('content' ,eventStore);
    }

    public printWelcome(): void {
        console.log("Welcome to Domeniere");
    }
}