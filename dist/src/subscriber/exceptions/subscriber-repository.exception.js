"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberRepositoryException = void 0;
const core_1 = require("@swindle/core");
class SubscriberRepositoryException extends core_1.BaseException {
    constructor(message = "Subscriber Repository Error") {
        super(message);
    }
}
exports.SubscriberRepositoryException = SubscriberRepositoryException;
