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
exports.SenderDetails = void 0;
const common_1 = require("@domeniere/common");
const entity_1 = require("@domeniere/entity");
const values_well_1 = require("../../values/values.well");
/**
 * SenderDetails
 *
 * The sender details.
 */
class SenderDetails extends entity_1.Entity {
    constructor(id, name, subject) {
        super(id);
        this._name = name;
        this._subject = subject;
    }
    equals(suspect) {
        let isEquals = false;
        if (suspect instanceof SenderDetails) {
            const other = suspect;
            isEquals = this.id().equals(other.id());
        }
        return isEquals;
    }
    id() {
        return super.id();
    }
    /**
     * name()
     *
     * gets the name of the sender.
     */
    name() {
        return this._name;
    }
    serializeData() {
        return JSON.stringify({
            name: this.name().serialize(),
            subject: this.subject().serialize(),
        });
    }
    /**
     * subject()
     *
     * the message subject
     */
    subject() {
        return this._subject;
    }
}
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.MessageSenderName)
], SenderDetails.prototype, "_name", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.MessageSubject)
], SenderDetails.prototype, "_subject", void 0);
exports.SenderDetails = SenderDetails;
