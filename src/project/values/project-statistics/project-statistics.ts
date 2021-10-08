import { Value } from '@domeniere/value';
import { MethodUndefinedException } from '@swindle/core';
import { ProjectStatisticsInterface } from './project-statistics.interface';


 export class ProjectStatistics extends Value implements ProjectStatisticsInterface {

    constructor() {
        super();
    }

    public equals(suspect: any): boolean {
        throw new MethodUndefinedException();
    }

    public serialize(): string {
        throw new MethodUndefinedException();
    }
}