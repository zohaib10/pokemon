export class BeachTiles {
  constructor(game) {
    this.game = game;
    this.image = snow_floor;
  }

  draw(context) {
    const pattern = context.createPattern(this.image, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0, 0, this.game.width / 2, this.game.height / 2);
  }
}
