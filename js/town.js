import { Wall } from "./wall.js";

export class Town {
  constructor(width, height, scale) {
    this.width = (width * 3) / 4;
    this.height = (height * 3) / 4;
    console.log(this.width, this.height);
    this.house = new Wall(scale, house_small, this.width, this.height);
    this.houseTree = new Wall(scale, grass_tree, this.width - 100, this.height);
    this.houseBushyTree = new Wall(
      scale,
      grass_tree_bushy,
      this.width - 150,
      this.height - 50
    );

    this.houseTreeSmall = new Wall(
      scale,
      grass_tree_small,
      this.width - 70,
      this.height - 70
    );
  }

  draw(context) {
    this.house.draw(context);
    this.houseTree.draw(context);
    this.houseBushyTree.draw(context);
    this.houseTreeSmall.draw(context);
  }
}
