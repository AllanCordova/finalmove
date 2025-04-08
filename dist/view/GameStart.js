"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class GameStart {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    getStart() {
        return this.start;
    }
    gameMenu() {
        const input = this.prompt(`Welcome to FINAL MOVE\n1. Start Game\n2. Exit`);
        switch (parseFloat(input)) {
            case 1:
                this.start = true;
                break;
            case 2:
                this.start = false;
                break;
            default:
                this.start = false;
                break;
        }
    }
}
exports.default = GameStart;
