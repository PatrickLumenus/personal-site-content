"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSubjectException = void 0;
const core_1 = require("@swindle/core");
class MessageSubjectException extends core_1.BaseException {
    constructor(message = "Message Subject Error") {
        super(message);
    }
}
exports.MessageSubjectException = MessageSubjectException;
