"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberRequestData = void 0;
const dto_1 = require("@domeniere/dto");
class SubscriberRequestData extends dto_1.Data {
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
    }
    serialize() {
        return JSON.stringify({
            name: this.name,
            email: this.email.toString()
        });
    }
}
exports.SubscriberRequestData = SubscriberRequestData;
