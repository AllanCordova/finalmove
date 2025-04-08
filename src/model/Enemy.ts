import Character from "./Character";

export default class Goblin extends Character {
  public constructor(name: string) {
    super(name);
  }

  public startGoblin(): string {
    this.setHp(120);
    this.setAtack(130);
    this.setMagic(0);
    this.setShield(0);
    return `Goblin is build\n${super.characterStatus()}`;
  }
}
