import promptSync from "prompt-sync";

export default class GameStart {
  private prompt = promptSync();
  private start!: boolean;

  public getStart(): boolean {
    return this.start;
  }

  public gameMenu(): void {
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
