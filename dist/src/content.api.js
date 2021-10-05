"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentApi = void 0;
const core_1 = require("@domeniere/core");
class ContentApi extends core_1.Api {
    constructor(eventStore) {
        super('content', eventStore);
    }
    printWelcome() {
        console.log("Welcome to Domeniere");
    }
}
exports.ContentApi = ContentApi;
