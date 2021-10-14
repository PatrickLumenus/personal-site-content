"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberNameException = void 0;
const core_1 = require("@swindle/core");
class SubscriberNameException extends core_1.BaseException {
    constructor(message = "Subscriber Name Error") {
        super(message);
    }
}
exports.SubscriberNameException = SubscriberNameException;
