import Hero from "./model/Player";
import Enemy from "./model/Enemy";
import Battle from "./model/Battle";

const player: Hero = new Hero("Allan");
const enemy: Enemy = new Enemy("Miner");

player.startHero();
enemy.startGoblin();

const battle = new Battle(player, enemy);

while (!battle.battleOver()) {
  const playerDmg = battle.playerAttack();
  console.log(`Você causou ${playerDmg} de dano!`);
  console.log(battle.battleStatus(enemy));

  if (battle.battleOver()) break;

  const enemyDmg = battle.enemyAttack();
  console.log(`Inimigo causou ${enemyDmg} de dano!`);
  console.log(battle.battleStatus(player));
}

console.log(`Vencedor: ${battle.getWinner().getName()}`);
