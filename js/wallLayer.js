import { Wall } from "./wall.js";

export class WallLayer {
  constructor(game) {
    this.game = game;
    this.house = new Wall(this, house_small);
    this.tree = new Wall(this, grass_tree);
    this.bushyTree = new Wall(this, grass_tree_bushy);
    this.treeSmall = new Wall(this, grass_tree_small);
  }

  draw(context) {
    this.house.draw(context);
    this.tree.draw(context);
    this.bushyTree.draw(context);
    this.treeSmall.draw(context);
  }
}
