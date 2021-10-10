"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberIdException = void 0;
const core_1 = require("@swindle/core");
class SubscriberIdException extends core_1.BaseException {
    constructor(message = "Subscriber Id Error") {
        super(message);
    }
}
exports.SubscriberIdException = SubscriberIdException;
