import { Wall } from "./wall.js";
import { SnowTiles } from "./snowTile.js";

export class Snow {
  constructor(game, width, height, scale) {
    this.width = width / 4;
    this.height = height / 4;

    this.snowTiles = new SnowTiles(game);
    this.tealTreeBushy = new Wall(
      this.game,
      scale,
      teal_tree_bushy,
      this.width - 200,
      this.height + 100
    );
    this.tealTreeSmall = new Wall(
      this.game,
      scale,
      teal_tree_small,
      this.width - 100,
      this.height
    );
    this.tealTree = new Wall(
      this.game,
      scale,
      teal_tree,
      this.width - 50,
      this.height + 50
    );
    this.iceRock1 = new Wall(
      this.game,
      scale,
      icerock1,
      this.width - 100,
      this.height - 100
    );
    this.iceRock2 = new Wall(
      this.game,
      scale,
      icerock2,
      this.width - 50,
      this.height - 150
    );

    // repeat
    this.tealTreeBushy2 = new Wall(
      this.game,
      scale,
      teal_tree_bushy,
      this.width + 200,
      this.height + 50
    );
    this.tealTreeSmall2 = new Wall(
      this.game,
      scale,
      teal_tree_small,
      this.width + 250,
      this.height
    );
    this.tealTree2 = new Wall(
      this.game,
      scale,
      teal_tree,
      this.width - 300,
      this.height - 200
    );
    this.iceRock3 = new Wall(
      this.game,
      scale,
      icerock1,
      this.width - 10,
      this.height - 10
    );
    this.iceRock4 = new Wall(
      this.game,
      scale,
      icerock2,
      this.width - 300,
      this.height - 100
    );

    this.snowDitch = new Wall(
      this.game,
      scale,
      snow_ditch,
      this.width + 100,
      this.height - 100
    );
  }

  draw(context) {
    this.snowTiles.draw(context);
    this.tealTreeBushy.draw(context);
    this.tealTreeSmall.draw(context);
    this.tealTree.draw(context);
    this.iceRock1.draw(context);
    this.iceRock2.draw(context);

    this.iceRock3.draw(context);
    this.iceRock4.draw(context);
    this.tealTreeBushy2.draw(context);
    this.tealTreeSmall2.draw(context);
    this.tealTree2.draw(context);

    this.snowDitch.draw(context);
  }
}
