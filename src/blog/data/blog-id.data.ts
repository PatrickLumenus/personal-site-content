import { Data } from '@domeniere/dto';


export class BlogIdData extends Data {

    public readonly value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }

    public serialize(): string {
        return this.value;
    }
}