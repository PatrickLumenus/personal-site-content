import { Data } from '@domeniere/dto';
import { EmailAddress } from '@swindle/core';
export declare class SubscriberRequestData extends Data {
    readonly name: string;
    readonly email: EmailAddress;
    constructor(name: string, email: EmailAddress);
    serialize(): string;
}
//# sourceMappingURL=subscriber-request.data.d.ts.map