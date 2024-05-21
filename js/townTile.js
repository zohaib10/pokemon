export class TownTile {
  constructor(game) {
    this.game = game;
    this.image = floor;
  }

  draw(context) {
    const pattern = context.createPattern(this.image, "repeat");
    context.fillStyle = pattern;
    context.fillRect(
      this.game.width / 2,
      this.game.height / 2,
      this.game.width,
      this.game.height
    );
  }
}
