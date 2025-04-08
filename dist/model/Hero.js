"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
class Hero extends Character_1.default {
    constructor(name) {
        super(name);
    }
    heroStatus() {
        return `Hero is build\n${super.characterStatus()}`;
    }
    startHero() {
        this.setHp(320);
        this.setAtack(100);
        this.setMagic(20);
        this.setShield(80);
    }
}
exports.default = Hero;
