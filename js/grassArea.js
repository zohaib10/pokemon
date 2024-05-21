export class Grass {
  constructor(game) {
    this.game = game;
    this.area1 = new GrassyArea(this.game, 5, 3, grass);
    this.area2 = new GrassyArea(this.game, 3, 6, grass);
  }

  update() {
    this.area1.update();
    this.area2.update();
  }

  draw(context) {
    this.area1.draw(context, 400, 578);
    this.area2.draw(context, 1100, 300);
  }
}

export class GrassyArea {
  constructor(game, rows, cols, image) {
    this.game = game;
    this.image = image;

    //image dimensions
    this.width = this.image.width - 20;
    this.height = this.image.height - 20;

    //grassy field
    this.rows = rows;
    this.columns = cols;

    this.x;
    this.y;

    //ending coords
    this.endX;
    this.endY;
  }

  update() {
    // console.log(
    //   "player X ",
    //   this.game.player.x,
    //   "player Y ",
    //   this.game.player.y
    // );
    // console.log(
    //   " starting coords ",
    //   this.x,
    //   this.y,
    //   " ending coords ",
    //   this.endX,
    //   this.endY
    // );
  }

  draw(context, startingX, startingY) {
    this.x = startingX - this.image.width * this.game.scale;
    this.y = startingY - this.image.height * this.game.scale;

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
          this.image.width * this.game.scale,
          this.image.height * this.game.scale
        );
        startingY += this.height / 1.5;
      }
      startingX += this.width / 1.5;
      this.endY = startingY - this.image.width * this.game.scale;
      startingY = tempY;
    }

    this.endX = startingX - this.image.width * this.game.scale;
  }
}
