// Battle.ts
import Character from "./Character";

export default class Battle {
  constructor(private player: Character, private enemy: Character) {}

  public playerAttack(): number {
    const damage = this.player.getAtack();
    this.enemy.setHp(this.enemy.getHp() - damage);
    if (this.enemy.getHp() < 0) {
      this.enemy.setHp(0);
    }
    return damage;
  }

  public enemyAttack(): number {
    const damage = this.enemy.getAtack();
    this.player.setHp(this.player.getHp() - damage);
    if (this.player.getHp() < 0) {
      this.player.setHp(0);
    }
    return damage;
  }

  public battleOver(): boolean {
    return !this.player.isAlive() || !this.enemy.isAlive();
  }

  public getWinner(): Character {
    return this.player.isAlive() ? this.player : this.enemy;
  }

  public battleStatus(character: Character): string {
    return `${character.getName()}  possui  ${character.getHp()} pontos de vida restantes`;
  }
}
