import { Pokemon } from "./Pokemon.js";

export class LoadingScreen {
  constructor(game, pokemonToFind) {
    this.game = game;
    this.image = pokemon;
    this.pokemonToFind = pokemonToFind;
    this.pokemon = new Pokemon(this.game);
    this.index = 1;
    this.char;

    this.winner = winner;
    this.loser = loser;
    // this.fps = 800;
  }

  typeWriter(context, text, font, heightAdjuster = 3, widthAdjuster = 3) {
    if (!text) {
      return;
    }

    this.char = text.substr(0, this.index) + "_";
    context.fillStyle = "#fff";
    context.font = font;
    context.fillText(
      this.char,
      this.game.width / widthAdjuster,
      this.game.height / heightAdjuster
    );
    if (this.index <= text.length) {
      setTimeout(this.typeWriter, 2000);
      this.index++;
    }
  }

  drawWinner(context) {
    context.drawImage(
      this.winner,
      0,
      0,
      this.winner.width,
      this.winner.height,
      0,
      0,
      this.game.width,
      this.game.height
    );

    this.typeWriter(
      context,
      "Winner!! nicely done! refresh to play again",
      "40px sans-serif",
      1.2,
      4
    );
  }

  draw(context, step) {
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
    if (step === 0) {
      this.typeWriter(context, "Pokémon: I Choose You!", "60px sans-serif");
    } else {
      this.typeWriter(
        context,
        "Find this pokemon to win the game",
        "40px sans-serif",
        4
      );

      this.pokemon.draw(context, this.pokemonToFind, 700, 220);

      this.typeWriter(
        context,
        "press space to continue",
        "20px sans-serif",
        1.8,
        2
      );
    }
  }
}
