import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Grass } from "./grassArea.js";

import { WildPokemonBattle } from "./pokemonBattle.js";

import { Town } from "./town.js";
import { Beach } from "./beach.js";
import { Snow } from "./snow.js";
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  canvas.width = 1400;
  canvas.height = 800;

  class Game {
    constructor(width, height, scale) {
      this.width = width;
      this.height = height;
      this.scale = scale;

      this.player = new Player(this);
      this.grass = new Grass(this);
      this.input = new InputHandler();

      this.town = new Town(this, canvas.width, canvas.height, this.scale);
      this.beach = new Beach(this, canvas.width, canvas.height, this.scale);
      this.snow = new Snow(this, canvas.width, canvas.height, this.scale);
      this.wildPokemonBattle = new WildPokemonBattle(this);
      //value to scale with
    }
    update(deltaTime) {
      this.player.update(this.input.keys, deltaTime);
      this.grass.update(this.input.keys);
    }

    setWildPokemonBattle(name) {
      if (!this.battleMode) {
        this.wildPokemonBattle.setName(name);
        this.battleMode = true;
      }
    }

    unsetWildPokemonBattle() {
      this.battleMode = false;
    }

    draw(context) {
      if (!this.battleMode) {
        this.town.draw(context);
        this.snow.draw(context);
        this.beach.draw(context);
        this.grass.draw(context);
        this.player.draw(context);
      } else {
        this.wildPokemonBattle.draw(context);
      }
    }
  }

  const game = new Game(canvas.width, canvas.height, 0.5);
  let lastTime = 0;

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.draw(ctx);
    game.update(deltaTime, ctx);
    //requestAnimationFrame will autogenerate timestamp and passes it to the animate function
    requestAnimationFrame(animate);
  };

  //passing 0 as initial value for timestamp
  animate(0);
});
