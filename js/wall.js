export class Wall {
  constructor(game, scale, object, x, y) {
    this.game = game;
    this.image = object;
    this.height = object.height;
    this.width = object.width;
    this.scale = scale;

    //coordinates
    this.x = x;
    this.y = y;
  }

  collide(newX, newY, dxr = 3, dxl = 3, dyu = 3, dyl = 3) {
    const upper = this.y - this.height / dyu;
    const lower = this.y + this.height / dyl;
    const right = this.x + this.width / dxr;
    const left = this.x - this.width / dxl;
    const playerX = newX;
    const playerY = newY;

    if (
      playerX > left &&
      playerX < right &&
      playerY > upper &&
      playerY < lower
    ) {
      return true;
    }
    return false;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.x,
      this.y,
      this.width * this.scale,
      this.height * this.scale
      // this.x,
      // this.y,
      // this.width * this.scale,
      // this.height * this.scale
    );
  }
}
