import { TownTile } from "./townTile.js";
import { Wall } from "./wall.js";

export class Town {
  constructor(game, width, height, scale) {
    this.width = (width * 3) / 4;
    this.height = (height * 3) / 4;

    this.tile = new TownTile(game);

    this.dirtTile = new Wall(
      this.game,
      scale,
      dirt_town_tile,
      this.width,
      this.height - 150
    );
    this.dirtTile2 = new Wall(
      this.game,
      scale,
      dirt_town_tile,
      this.width - 100,
      this.height - 150
    );
    this.dirtTile3 = new Wall(
      this.game,
      scale,
      dirt_town_tile,
      this.width - 200,
      this.height - 150
    );

    this.house = new Wall(
      this.game,
      scale,
      house_small,
      this.width + 150,
      this.height - 200
    );
    this.houseTree = new Wall(
      this.game,
      scale,
      grass_tree,
      this.width - 100,
      this.height
    );
    this.houseBushyTree = new Wall(
      this.game,
      scale,
      grass_tree_bushy,
      this.width - 150,
      this.height - 50
    );

    this.houseTreeSmall = new Wall(
      this.game,
      scale,
      grass_tree_small,
      this.width - 200,
      this.height
    );
  }

  collide(newX, newY) {
    return (
      this.house.collide(newX, newY, 2.4, 7.4, 5.5) ||
      this.houseTree.collide(newX, newY) ||
      this.houseBushyTree.collide(newX, newY) ||
      this.houseTreeSmall.collide(newX, newY, 6, 1.4, 3, 2)
    );
  }

  draw(context) {
    this.tile.draw(context);
    this.dirtTile.draw(context);
    this.dirtTile2.draw(context);
    this.dirtTile3.draw(context);
    this.house.draw(context);
    this.houseTree.draw(context);
    this.houseBushyTree.draw(context);
    this.houseTreeSmall.draw(context);
  }
}
