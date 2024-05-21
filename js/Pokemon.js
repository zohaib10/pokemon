export class Pokemon {
  constructor(game) {
    this.game = game;
    this.image;
    this.height = 180;
    this.width = 200;

    this.x;
    this.y;

    this.frameX = 0;

    this.step = 0;
  }

  draw(context, name, x, y, multipler = 1) {
    this.image = document.getElementById(name);
    this.x = x;
    this.y = y;

    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * multipler,
      this.height * multipler
    );
  }
}
