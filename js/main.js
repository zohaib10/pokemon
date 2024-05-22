import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Grass } from "./grassArea.js";

import { WildPokemonBattle } from "./pokemonBattle.js";

import { Town } from "./town.js";
import { Beach } from "./beach.js";
import { Snow } from "./snow.js";

import { LoadingScreen } from "./loadingScreen.js";

import { Ruins } from "./ruins.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  canvas.width = 1400;
  canvas.height = 800;

  const pokemon = [
    "atrox",
    "charmadillo",
    "cindrill",
    "cleaf",
    "draem",
    "finiette",
    "finsta",
    "friolera",
    "gulfin",
    "ivieron",
    "jacana",
    "larvea",
    "pluma",
    "plumette",
    "pouch",
    "sparchu",
  ];

  class Game {
    constructor(width, height, scale) {
      this.width = width;
      this.height = height;
      this.scale = scale;

      this.step = 0;

      this.pokemonToFind = pokemon[Math.floor(Math.random() * 16)];

      this.player = new Player(this);
      this.grass = new Grass(this);
      this.input = new InputHandler();

      this.town = new Town(this, canvas.width, canvas.height, this.scale);
      this.beach = new Beach(this, canvas.width, canvas.height, this.scale);
      this.snow = new Snow(this, canvas.width, canvas.height, this.scale);
      this.ruins = new Ruins(this, canvas.width, canvas.height, this.scale);

      this.wildPokemonBattle = new WildPokemonBattle(this);
      this.loadingScreen = new LoadingScreen(this, this.pokemonToFind);
      this.collide = (newX, newY) => {
        return this.beach.collide(newX, newY) || this.town.collide(newX, newY);
      };
    }

    update(deltaTime) {
      if (this.step === 1 && this.input.keys.includes(" ")) {
        this.step = 4;
      }

      if (this.battleMode && this.input.keys.includes("Enter")) {
        if (this.wildPokemonBattle.name === this.pokemonToFind) {
          this.step = 2;
        }

        this.wildPokemonBattle.resetSteps();
        this.battleMode = false;
      }
      if (this.battleMode) {
        this.wildPokemonBattle.update(deltaTime);
      }
      this.loadingScreen.update(deltaTime);
      this.player.update(this.input.keys, deltaTime, this.collide());
      this.grass.update(this.input.keys);
    }

    setWildPokemonBattle(name) {
      if (!this.battleMode) {
        this.wildPokemonBattle.setName(name);
        this.battleMode = true;
      }
    }

    setWinningStep() {
      this.step = 2;
    }

    setLosingStep() {
      this.step = 3;
    }

    draw(context) {
      if (this.step === 0) {
        this.loadingScreen.draw(context, this.step);
        setTimeout(() => {
          this.step = 1;
        }, 1000);
      } else if (this.step === 1) {
        this.loadingScreen.draw(context, this.step);
      } else if (this.step === 2) {
        this.loadingScreen.drawWinner(context);
      } else if (this.step === 3) {
      } else {
        if (!this.battleMode) {
          this.town.draw(context);
          this.snow.draw(context);
          this.ruins.draw(context);
          this.beach.draw(context);
          this.grass.draw(context);
          this.player.draw(context);
        } else {
          this.wildPokemonBattle.draw(context);
        }
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
