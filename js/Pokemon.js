export class Pokemon {
  constructor(game) {
    this.game = game;
    this.image;
    this.height = 180;
    this.width = 180;

    this.x = 900;
    this.y = 200;

    this.frameX = 0;

    this.step = 0;
  }

  draw(context, name) {
    this.image = document.getElementById(name);

    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
