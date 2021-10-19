"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMessageData = void 0;
const dto_1 = require("@domeniere/dto");
class EmailMessageData extends dto_1.Data {
    constructor(name, email, subject, content) {
        super();
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.content = content;
    }
    serialize() {
        return JSON.stringify({
            name: this.name,
            email: this.email.toString(),
            subject: this.subject,
            content: this.content,
        });
    }
}
exports.EmailMessageData = EmailMessageData;
