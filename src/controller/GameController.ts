import GameStart from "../view/GameStart";
import Player from "../model/Player";
import Enemy from "../model/Enemy";
import Battle from "../model/Battle";

export default class GameController {
  private player: Player;
  private enemy: Enemy;
  private battle: Battle;
  private load: GameStart;

  public constructor() {
    this.player = new Player("Heroi");
    this.enemy = new Enemy("Goblin");
    this.battle = new Battle(this.player, this.enemy);
    this.load = new GameStart();
  }

  public startGame(): void {
    this.load.gameMenu();
    while (this.load.getStart()) {
      console.log("jogo começou");
    }
    console.log("jogo fechou");
  }
}
