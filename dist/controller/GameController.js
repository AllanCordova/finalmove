"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameStart_1 = __importDefault(require("../view/GameStart"));
const Player_1 = __importDefault(require("../model/Player"));
const Enemy_1 = __importDefault(require("../model/Enemy"));
const Battle_1 = __importDefault(require("../model/Battle"));
class GameController {
    constructor() {
        this.player = new Player_1.default("Heroi");
        this.enemy = new Enemy_1.default("Goblin");
        this.battle = new Battle_1.default(this.player, this.enemy);
        this.load = new GameStart_1.default();
    }
    startGame() {
        this.load.gameMenu();
        while (this.load.getStart()) {
            console.log("jogo começou");
        }
        console.log("jogo fechou");
    }
}
exports.default = GameController;
