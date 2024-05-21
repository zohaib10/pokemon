export class Grass {
  constructor(game) {
    this.game = game;
    this.area1 = new GrassyArea("area1", this.game, 5, 3, grass);
    this.area2 = new GrassyArea("area2", this.game, 3, 6, grass);
    this.area3 = new GrassyArea("area3", this.game, 3, 3, grassice);
    this.area4 = new GrassyArea("area4", this.game, 3, 3, grass);
  }

  update() {
    this.area1.update();
    this.area2.update();
    this.area3.update();
    this.area4.update();
  }

  draw(context) {
    this.area1.draw(context, 400, 578);
    this.area2.draw(context, 1100, 300);
    this.area3.draw(context, 100, 100);
    this.area4.draw(context, 100, 500);
  }
}

export class GrassyArea {
  constructor(name, game, rows, cols, image) {
    this.game = game;
    this.name = name;
    this.image = image;

    console.log(this);

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

  update() {
    const playerXCoords = this.game.player.x;
    const playerYCoords = this.game.player.y;

    if (
      playerXCoords >= this.x &&
      playerXCoords <= this.endX &&
      playerYCoords >= this.y &&
      playerYCoords <= this.endY
    ) {
      console.log("Player is within ", this.name);
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
