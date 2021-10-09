import { Data } from '@domeniere/dto';
import { MethodUndefinedException } from '@swindle/core';


export class TechnologyData extends Data {

    public readonly technology: string;

    constructor(tech: string) {
        super();
        this.technology = tech;
    }

    public serialize(): string {
        return this.technology;
    }
}