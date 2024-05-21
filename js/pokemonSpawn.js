import { spawnChance } from "../data/spawnChance.js";

export class PokemonSpawn {
  constructor(game) {
    this.game = game;
  }

  spawnChance(area, input) {
    const chance = spawnChance[area];
    if (input.length && chance.length) {
      const spawnValue = this.getSpawnValue();
      const value = chance.find(
        (c) => spawnValue <= c.upper && spawnValue >= c.lower
      );

      if (value) {
        this.game.setWildPokemonBattle(value.name);
      }
    }
  }

  getSpawnValue() {
    return Math.random() * 10000;
  }
}
