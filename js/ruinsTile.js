export class RuinsTiles {
  constructor(game) {
    this.game = game;
    this.image = floor;
  }

  draw(context) {
    const pattern = context.createPattern(this.image, "repeat");
    context.fillStyle = pattern;
    context.fillRect(
      this.game.width / 2,
      0,
      this.game.width / 2,
      this.game.height / 2
    );
  }
}
