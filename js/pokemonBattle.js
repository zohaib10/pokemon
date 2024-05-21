import { Pokemon } from "./Pokemon.js";

class Battle {
  constructor(type) {
    this.type = type;
  }
}

export class WildPokemonBattle extends Battle {
  constructor(game) {
    super("wild-pokemon");
    this.name;
    this.game = game;
    this.area;
    this.image = forest;

    this.splash0 = splash0;
    this.splash1 = splash1;
    this.splash2 = splash2;
    this.step = 0;
    this.pokemon = new Pokemon(this.game);
  }

  setName(name) {
    this.name = name;
  }

  update() {}

  transition(context) {
    if (this.step === 0) {
      context.drawImage(
        this.splash0,
        0,
        0,
        this.splash0.width,
        this.splash0.height,
        0,
        0,
        this.game.width,
        this.game.height
      );

      setTimeout(() => {
        this.step = 1;
      }, 200);
    } else if (this.step === 1) {
      context.drawImage(
        this.splash1,
        0,
        0,
        this.splash1.width,
        this.splash1.height,
        0,
        0,
        this.game.width,
        this.game.height
      );

      setTimeout(() => {
        this.step = 2;
      }, 200);
    } else if (this.step === 2) {
      context.drawImage(
        this.splash2,
        0,
        0,
        this.splash2.width,
        this.splash2.height,
        0,
        0,
        this.game.width,
        this.game.height
      );

      setTimeout(() => {
        this.step = 3;
      }, 200);
    }
  }

  draw(context) {
    this.transition(context);
    if (this.step === 3) {
      context.drawImage(
        this.image,
        0,
        0,
        this.image.width,
        this.image.height,
        0,
        0,
        this.game.width,
        this.game.height
      );
      if (this.name) {
        console.log(this.name);
        this.pokemon.draw(context, this.name);
      }
    }
  }
}
