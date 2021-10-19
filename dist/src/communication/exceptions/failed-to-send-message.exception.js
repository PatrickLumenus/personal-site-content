"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedToSendMessageException = void 0;
const core_1 = require("@swindle/core");
class FailedToSendMessageException extends core_1.BaseException {
    constructor(message = "Failed To Send Message Error") {
        super(message);
    }
}
exports.FailedToSendMessageException = FailedToSendMessageException;
