"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMessage = void 0;
const aggregate_1 = require("@domeniere/aggregate");
const common_1 = require("@domeniere/common");
const core_1 = require("@swindle/core");
const values_well_1 = require("../../values/values.well");
/**
 * EmailMessage
 *
 * EmailMessage represents an email message.
 */
class EmailMessage extends aggregate_1.TimestampedAggregate {
    constructor(root, content, version = 1.0, createdOn = core_1.DateTime.Now(), updatedOn = core_1.DateTime.Now(), deletedOn = null) {
        super(root, version, createdOn, updatedOn, deletedOn);
        this._content = content;
    }
    /**
     * content()
     *
     * gets the content.
     */
    content() {
        return this._content;
    }
    /**
     * email()
     *
     * gets the email address.
     */
    email() {
        return this.root().id().id();
    }
    equals(suspect) {
        let isEquals = false;
        if (suspect instanceof EmailMessage) {
            const other = suspect;
            isEquals = this.id().equals(other.id());
        }
        return isEquals;
    }
    /**
     * name()
     *
     * gets the name of the sender.
     */
    name() {
        return this.root().name();
    }
    root() {
        return super.root();
    }
    serializeData() {
        return JSON.stringify({
            content: this.content().serialize()
        });
    }
    /**
     * subject()
     *
     * gets the message subject.
     */
    subject() {
        return this.root().subject();
    }
}
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.MessageContent)
], EmailMessage.prototype, "_content", void 0);
exports.EmailMessage = EmailMessage;
