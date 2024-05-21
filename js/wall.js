export class Wall {
  constructor(game, object, x, y) {
    this.game = game;
    this.height = object.height;
    this.width = object.width;

    this.image = object;

    //coordinates
    this.x = x || this.game.width - this.width;
    this.y = y || this.game.height - this.height;
  }

  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * this.game.scale,
      this.height * this.game.scale
    );
  }
}
