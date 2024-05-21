export class Tiles {
  constructor(game, image, x, y) {
    this.game = game;
    this.image = image;
  }

  draw(context) {
    const pattern = context.createPattern(this.image, "repeat");
    context.fillStyle = pattern;
    context.fillRect(x, y, this.game.width / 2, this.game.height / 2);
  }
}
