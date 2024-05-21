export class ShoreTiles {
  constructor(game) {
    this.game = game;
    this.image = shore_floor;
  }

  draw(context) {
    const pattern = context.createPattern(this.image, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0, this.game.height / 2);
  }
}
