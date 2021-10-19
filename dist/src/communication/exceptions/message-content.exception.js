"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContentException = void 0;
const core_1 = require("@swindle/core");
class MessageContentException extends core_1.BaseException {
    constructor(message = "Message Content Error") {
        super(message);
    }
}
exports.MessageContentException = MessageContentException;
