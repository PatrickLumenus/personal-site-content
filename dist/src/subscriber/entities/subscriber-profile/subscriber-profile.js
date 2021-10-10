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
exports.SubscriberProfile = void 0;
const common_1 = require("@domeniere/common");
const entity_1 = require("@domeniere/entity");
const core_1 = require("@swindle/core");
/**
 * SubscriberProfile
 *
 * The profile of a subscriber.
 */
class SubscriberProfile extends entity_1.Entity {
    constructor(id, email) {
        super(id);
        this._email = email;
    }
    /**
     * email()
     *
     * gets the susbscriber email address.
     */
    email() {
        return this._email;
    }
    equals(suspect) {
        let isEquals = false;
        if (suspect instanceof SubscriberProfile) {
            const other = suspect;
            isEquals = this.id().equals(other.id());
        }
        return isEquals;
    }
    serializeData() {
        return JSON.stringify({
            email: this.email().toString()
        });
    }
    /**
     * setEmailAddress()
     *
     * sets the email address.
     * @param email the email address to set.
     */
    setEmail(email) {
        this._email = email;
        this.commitStateChanges();
    }
}
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", core_1.EmailAddress)
], SubscriberProfile.prototype, "_email", void 0);
exports.SubscriberProfile = SubscriberProfile;
