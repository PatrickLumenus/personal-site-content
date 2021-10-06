import { Module } from '@domeniere/module';


export default class ProjectModule extends Module {
    constructor() {
        super('project');
    }

    protected createdBindings() {
        // register module bindings here.
    }
}

// module well exports go here.