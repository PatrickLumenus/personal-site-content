"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSenderNameException = void 0;
const core_1 = require("@swindle/core");
class MessageSenderNameException extends core_1.BaseException {
    constructor(message = "Message Sender Name Error") {
        super(message);
    }
}
exports.MessageSenderNameException = MessageSenderNameException;
