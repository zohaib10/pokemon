import { pokemonStats } from "../data/pokemonStats.js";

export class Battle {
  constructor(game) {
    this.game = game;

    this.userPokemonStats;
    this.enemeyPokemonStats;
    this.userPokemonName;
    this.enemeyPokemonName;
    this.userPokemonLevel = 18;
    this.enemyPokemonLevel = 14;

    this.maxHealth = 400;
    this.currentHealth = 400;
  }

  draw(context, userPokemon, enemyPokemon) {
    this.userPokemonName = userPokemon;
    this.enemeyPokemonName = enemyPokemon;
    this.userPokemonStats = pokemonStats[this.userPokemonName];

    this.drawBattleCommands(context);
  }

  drawBattleCommands(context) {
    context.strokeStyle = "black";
    context.strokeRect(300, 600, 800, 200);

    context.fillStyle = "#800000";
    context.fillRect(300, 600, 800, 200);

    context.fillStyle = "white";
    context.font = "20px Arial";

    if (this.enemeyPokemonName === this.game.pokemonToFind) {
      context.fillText("You found it! Press enter", 600, 700);
    } else {
      context.fillText("Press Enter to Run", 600, 700);
    }
  }
}
