export default class Character {
  private name: string;
  private hp!: number;
  private atack!: number;
  private magic!: number;
  private shield!: number;

  public constructor(name: string) {
    this.name = name;
  }

  public characterStatus(): string {
    return `name: ${this.name}\nhp: ${this.hp}\natack: ${this.atack}\nmagic: ${this.magic}\nshield: ${this.shield}`;
  }

  public isAlive(): boolean {
    return this.hp > 0;
  }

  public setName(newName: string): void {
    this.name = newName;
  }

  public getName(): string {
    return this.name;
  }

  public setHp(newHp: number): void {
    this.hp = newHp;
  }

  public getHp(): number {
    return this.hp;
  }

  public setAtack(newAtack: number): void {
    this.atack = newAtack;
  }

  public getAtack(): number {
    return this.atack;
  }

  public setMagic(newMagic: number): void {
    this.magic = newMagic;
  }

  public getMagic(): number {
    return this.magic;
  }

  public setShield(newShield: number): void {
    this.shield = newShield;
  }

  public getShield(): number {
    return this.shield;
  }
}
