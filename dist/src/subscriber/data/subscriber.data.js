"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberData = void 0;
const dto_1 = require("@domeniere/dto");
class SubscriberData extends dto_1.Data {
    constructor(id, name, email) {
        super();
        this.id = id;
        this.email = email;
        this.name = name;
    }
    serialize() {
        return JSON.stringify({
            id: this.id,
            name: this.name,
            email: this.email
        });
    }
}
exports.SubscriberData = SubscriberData;
