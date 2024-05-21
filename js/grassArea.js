import { PokemonSpawn } from "./pokemonSpawn.js";

export class Grass {
  constructor(game) {
    this.game = game;

    this.pallet = new GrassyArea("pallet", this.game, 5, 3, grass);
    this.littleroot = new GrassyArea("littleroot", this.game, 3, 6, grass);
    this.twinleaf = new GrassyArea("twinleaf", this.game, 3, 3, grassice);
    this.azalea = new GrassyArea("azalea", this.game, 3, 3, grass);
  }

  update(input) {
    this.pallet.update(input);
    this.littleroot.update(input);
    this.twinleaf.update(input);
    this.azalea.update(input);
  }

  draw(context) {
    this.pallet.draw(context, 400, 578);
    this.littleroot.draw(context, 1100, 300);
    this.twinleaf.draw(context, 100, 100);
    this.azalea.draw(context, 100, 500);
  }
}

export class GrassyArea {
  constructor(name, game, rows, cols, image) {
    this.game = game;
    this.name = name;
    this.image = image;
    this.pokemonSpawn = new PokemonSpawn(this.game);

    //image dimensions
    this.width = this.image.width * this.game.scale;
    this.height = this.image.height * this.game.scale;

    //grassy field
    this.rows = rows;
    this.columns = cols;

    this.x;
    this.y;

    //ending coords
    this.endX;
    this.endY;
  }

  update(input) {
    const playerXCoords = this.game.player.x;
    const playerYCoords = this.game.player.y;

    if (
      playerXCoords >= this.x &&
      playerXCoords <= this.endX &&
      playerYCoords >= this.y &&
      playerYCoords <= this.endY
    ) {
      console.log("Im in ", this.name);
      this.pokemonSpawn.spawnChance(this.name, input);
    }
  }

  draw(context, startingX, startingY) {
    this.x = startingX - this.width;
    this.y = startingY - this.image.height + 8;

    let tempX = startingX;
    let tempY = startingY;

    for (let i = 0; i < this.columns; i++) {
      for (let j = 0; j < this.rows; j++) {
        context.drawImage(
          this.image,
          0,
          0,
          this.image.width,
          this.image.height,
          startingX,
          startingY,
          this.width,
          this.height
        );
        startingY += this.height;
      }
      startingX += this.width;
      this.endY = startingY - this.image.height + 4;
      startingY = tempY;
    }

    this.endX = startingX - this.width;
  }
}
