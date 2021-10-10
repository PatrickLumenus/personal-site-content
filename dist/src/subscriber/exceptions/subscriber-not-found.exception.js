"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberNotFoundException = void 0;
const core_1 = require("@swindle/core");
class SubscriberNotFoundException extends core_1.BaseException {
    constructor(message = "Subscriber Not Found Error") {
        super(message);
    }
}
exports.SubscriberNotFoundException = SubscriberNotFoundException;
