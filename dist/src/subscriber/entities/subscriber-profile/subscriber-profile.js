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
const values_well_1 = require("../../values/values.well");
/**
 * SubscriberProfile
 *
 * The profile of a subscriber.
 */
class SubscriberProfile extends entity_1.Entity {
    constructor(id, name, email) {
        super(id);
        this._email = email;
        this._name = name;
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
    /**
     * name()
     *
     * gets the subscriber name.
     */
    name() {
        return this._name;
    }
    serializeData() {
        return JSON.stringify({
            email: this.email().toString(),
            name: this.name().serialize(),
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
    /**
     * setName()
     *
     * sets the subscriber name.
     * @param newName the new name to set.
     */
    setName(newName) {
        this._name = newName;
        this.commitStateChanges();
    }
}
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", core_1.EmailAddress)
], SubscriberProfile.prototype, "_email", void 0);
__decorate([
    (0, common_1.State)(),
    __metadata("design:type", values_well_1.SubscriberName)
], SubscriberProfile.prototype, "_name", void 0);
exports.SubscriberProfile = SubscriberProfile;
