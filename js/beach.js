import { Wall } from "./wall.js";
import { BeachTiles } from "./beachTile.js";
export class Beach {
  constructor(game, width, height, scale) {
    this.width = (width * 2) / 4;
    this.height = (height * 2) / 4;

    this.beachTiles = new BeachTiles(game);
    this.shoreTiles = new Wall(scale, shore_floor, 0, height / 2);
    this.palmTree = new Wall(scale, palm, this.width - 200, this.height + 100);
    this.palmTreeAlt = new Wall(scale, palm_alt, this.width - 100, this.height);
    this.palmTreeSmall = new Wall(
      scale,
      palm_small,
      this.width - 150,
      this.height + 300
    );
    this.palmTree2 = new Wall(scale, palm, this.width - 400, this.height + 100);
    this.palmTreeAlt2 = new Wall(
      scale,
      palm_alt,
      this.width - 400,
      this.height + 300
    );

    this.palmTreeSmall2 = new Wall(
      scale,
      palm_small,
      this.width - 350,
      this.height
    );
  }
  draw(context) {
    this.beachTiles.draw(context);
    // this.shoreTiles.draw(context);
    this.palmTree.draw(context);
    this.palmTreeSmall.draw(context);
    this.palmTreeAlt.draw(context);
    this.palmTree2.draw(context);
    this.palmTreeSmall2.draw(context);
    this.palmTreeAlt2.draw(context);
  }
}
