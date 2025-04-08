"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("./model/Player"));
const Enemy_1 = __importDefault(require("./model/Enemy"));
const Battle_1 = __importDefault(require("./model/Battle"));
const player = new Player_1.default("Allan");
const enemy = new Enemy_1.default("Miner");
player.startHero();
enemy.startGoblin();
const battle = new Battle_1.default(player, enemy);
while (!battle.battleOver()) {
    const playerDmg = battle.playerAttack();
    console.log(`Você causou ${playerDmg} de dano!`);
    console.log(battle.battleStatus(enemy));
    if (battle.battleOver())
        break;
    const enemyDmg = battle.enemyAttack();
    console.log(`Inimigo causou ${enemyDmg} de dano!`);
    console.log(battle.battleStatus(player));
}
console.log(`Vencedor: ${battle.getWinner().getName()}`);
