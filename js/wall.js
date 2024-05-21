export class Wall {
  constructor(game, object) {
    this.game = game;
    this.height = object.height;
    this.width = object.width;

    this.image = object;

    //coordinates
    this.x = this.game.width / 2 - this.width;
    this.y = this.game.height / 2 - this.height;
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
