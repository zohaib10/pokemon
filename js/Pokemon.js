export class Pokemon {
  constructor(game) {
    this.game = game;
    this.image;
    this.height = 180;
    this.width = 190;

    this.x;
    this.y;

    this.frameX = 0;

    this.step = 0;

    //sprite animation speed
    this.maxFrame = 3;
    this.fps = 20;
    this.frameInterval = 1000 / (this.fps * 0.5);
    this.frameTimer = 0;
  }

  update(deltaTime) {
    //Sprite animation
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0; //reset frame timer
      if (this.frameX < this.maxFrame) {
        this.frameX++;
      } else {
        this.frameX = 0;
      }
    } else {
      this.frameTimer += deltaTime;
    }
  }

  drawStaticPokemon(context, name, x, y, multipler = 1) {
    this.image = document.getElementById(name);
    this.x = x;
    this.y = y;

    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * multipler,
      this.height * multipler
    );
  }

  draw(context, name, x, y) {
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
      this.width,
      this.height
    );
  }
}
