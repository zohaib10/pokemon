import { Wall } from "./wall.js";
import { SnowTiles } from "./snowTile.js";

export class Snow {
  constructor(game, width, height, scale) {
    this.width = width / 4;
    this.height = height / 4;

    this.snowTiles = new SnowTiles(game);
    this.tealTreeBushy = new Wall(
      scale,
      teal_tree_bushy,
      this.width - 200,
      this.height + 100
    );
    this.tealTreeSmall = new Wall(
      scale,
      teal_tree_small,
      this.width - 100,
      this.height
    );
    this.tealTree = new Wall(
      scale,
      teal_tree,
      this.width - 50,
      this.height + 50
    );
    this.iceRock1 = new Wall(
      scale,
      icerock1,
      this.width - 100,
      this.height - 100
    );
    this.iceRock2 = new Wall(
      scale,
      icerock2,
      this.width - 50,
      this.height - 150
    );
    // this.palmTree2 = new Wall(scale, palm, this.width - 400, this.height + 100);
    // this.palmTreeAlt2 = new Wall(
    //   scale,
    //   palm_alt,
    //   this.width - 400,
    //   this.height + 300
    // );

    // this.palmTreeSmall2 = new Wall(
    //   scale,
    //   palm_small,
    //   this.width - 350,
    //   this.height
    // );
  }

  draw(context) {
    this.snowTiles.draw(context);
    this.tealTreeBushy.draw(context);
    this.tealTreeSmall.draw(context);
    this.tealTree.draw(context);
    this.iceRock1.draw(context);
    this.iceRock2.draw(context);
  }
}
