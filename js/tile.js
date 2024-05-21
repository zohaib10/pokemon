export class Tile {
  constructor(game) {
    this.game = game;
    this.height = 50;
    this.width = 50;
    this.image = floor;
  }

  draw(context) {
    const pattern = context.createPattern(floor, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0, 0, this.game.width, this.game.height);
  }
}
