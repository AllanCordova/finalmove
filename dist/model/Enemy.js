"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
class Goblin extends Character_1.default {
    constructor(name) {
        super(name);
    }
    startGoblin() {
        this.setHp(120);
        this.setAtack(130);
        this.setMagic(0);
        this.setShield(0);
        return `Goblin is build\n${super.characterStatus()}`;
    }
}
exports.default = Goblin;
