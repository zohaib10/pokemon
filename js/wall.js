export class Wall {
  constructor(scale, object, x, y) {
    this.image = object;
    this.height = object.height;
    this.width = object.width;
    this.scale = scale;

    //coordinates
    this.x = x;
    this.y = y;
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
