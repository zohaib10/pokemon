export class Player {
  constructor(game) {
    this.game = game;
    this.height = 116.5;
    this.width = 100;

    this.image = player;

    //coordinates
    this.x = this.game.width / 2 - this.width;
    this.y = this.game.height / 2 - this.height;
  }

  update(input) {
    //Horizontal Movement
    if (input.includes("ArrowRight")) {
      this.x += 2;
    } else if (input.includes("ArrowLeft")) {
      this.x -= 2;
    } else if (input.includes("ArrowDown")) {
      this.y += 2;
    } else if (input.includes("ArrowUp")) {
      this.y -= 2;
    }
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
