"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlreadyInUseException = void 0;
const core_1 = require("@swindle/core");
class EmailAlreadyInUseException extends core_1.BaseException {
    constructor(message = "Email Already In Use Error") {
        super(message);
    }
}
exports.EmailAlreadyInUseException = EmailAlreadyInUseException;
