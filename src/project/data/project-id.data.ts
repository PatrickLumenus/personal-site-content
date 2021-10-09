import { Data } from '@domeniere/dto';
import { MethodUndefinedException } from '@swindle/core';


export class ProjectIdData extends Data {

    public readonly id: string;

    constructor(id: string) {
        super();
        this.id = id;
    }

    public serialize(): string {
        return this.id;
    }
}