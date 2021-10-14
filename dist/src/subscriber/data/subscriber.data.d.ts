import { Data } from '@domeniere/dto';
export declare class SubscriberData extends Data {
    readonly id: string;
    readonly email: string;
    readonly name: string;
    constructor(id: string, name: string, email: string);
    serialize(): string;
}
//# sourceMappingURL=subscriber.data.d.ts.map