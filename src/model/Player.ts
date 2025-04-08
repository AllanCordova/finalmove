import Character from "./Character";

export default class Hero extends Character {
  public constructor(name: string) {
    super(name);
  }

  public heroStatus(): string {
    return `Hero is build\n${super.characterStatus()}`;
  }

  public startHero(): void {
    this.setHp(320);
    this.setAtack(100);
    this.setMagic(20);
    this.setShield(80);
  }
}
