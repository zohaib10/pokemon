export class GrassyArea {
  constructor(game) {
    this.game = game;
    this.image = grass;

    //image dimensions
    this.width = this.image.width;
    this.height = this.image.height;

    //grassy field
    this.rows = 5;
    this.columns = 3;

    this.x = 400;
    this.y = 578;
  }

  update() {}

  draw(context) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        context.drawImage(
          this.image,
          0,
          0,
          this.image.width,
          this.image.height,
          this.x,
          this.y,
          this.image.width * this.game.scale,
          this.image.height * this.game.scale
        );
        this.y += this.height / 2.2;
      }
      this.x += this.width / 2.2;
      this.y = 578;
    }
    this.x = 400;
  }
}
