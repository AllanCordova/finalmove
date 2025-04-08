"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Battle {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }
    playerAttack() {
        const damage = this.player.getAtack();
        this.enemy.setHp(this.enemy.getHp() - damage);
        if (this.enemy.getHp() < 0) {
            this.enemy.setHp(0);
        }
        return damage;
    }
    enemyAttack() {
        const damage = this.enemy.getAtack();
        this.player.setHp(this.player.getHp() - damage);
        if (this.player.getHp() < 0) {
            this.player.setHp(0);
        }
        return damage;
    }
    battleOver() {
        return !this.player.isAlive() || !this.enemy.isAlive();
    }
    getWinner() {
        return this.player.isAlive() ? this.player : this.enemy;
    }
    battleStatus(character) {
        return `${character.getName()}  possui  ${character.getHp()} pontos de vida restantes`;
    }
}
exports.default = Battle;
