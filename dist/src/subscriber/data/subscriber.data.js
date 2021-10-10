"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberData = void 0;
const dto_1 = require("@domeniere/dto");
class SubscriberData extends dto_1.Data {
    constructor(id, email) {
        super();
        this.id = id;
        this.email = email;
    }
    serialize() {
        return JSON.stringify({
            id: this.id,
            email: this.email
        });
    }
}
exports.SubscriberData = SubscriberData;
