"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(name) {
        this.name = name;
    }
    characterStatus() {
        return `name: ${this.name}\nhp: ${this.hp}\natack: ${this.atack}\nmagic: ${this.magic}\nshield: ${this.shield}`;
    }
    isAlive() {
        return this.hp > 0;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
    setHp(newHp) {
        this.hp = newHp;
    }
    getHp() {
        return this.hp;
    }
    setAtack(newAtack) {
        this.atack = newAtack;
    }
    getAtack() {
        return this.atack;
    }
    setMagic(newMagic) {
        this.magic = newMagic;
    }
    getMagic() {
        return this.magic;
    }
    setShield(newShield) {
        this.shield = newShield;
    }
    getShield() {
        return this.shield;
    }
}
exports.default = Character;
