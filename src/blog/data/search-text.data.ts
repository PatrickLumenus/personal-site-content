import { Data } from '@domeniere/dto';
import { MethodUndefinedException } from '@swindle/core';


export class SearchTextData extends Data {

    public readonly content: string;

    constructor(content: string) {
        super();
        this.content = content;
    }

    public serialize(): string {
        return this.content;
    }
}