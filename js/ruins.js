import { Wall } from "./wall.js";

import { RuinsTiles } from "./ruinsTile.js";

export class Ruins {
  constructor(game, width, height, scale) {
    this.width = width / 2;
    this.height = height / 2;
    this.ruinTiles = new RuinsTiles(game);

    this.grassGym = new Wall(
      this.game,
      scale,
      grass_gym,
      this.width + 100,
      this.height - 400
    );
    this.grassMountainAlt = new Wall(
      this.game,
      scale,
      grass_mountain_alt,
      this.width + 400,
      this.height - 300
    );
    this.grassMountainSmall = new Wall(
      this.game,
      scale,
      grass_mountain_small,
      this.width + 150,
      this.height - 100
    );
    this.ruinGate = new Wall(
      this.game,
      scale,
      ruin_gate,
      this.width - 400,
      this.height + 100
    );
    this.ruinPillarBrokeAlt = new Wall(
      this.game,
      scale,
      ruin_pillar_broke_alt,
      this.width + 435,
      this.height - 310
    );

    this.ruinPillarBroke = new Wall(
      this.game,
      scale,
      ruin_pillar_broke,
      this.width + 300,
      this.height - 100
    );

    this.ruinPillarBroke2 = new Wall(
      this.game,
      scale,
      ruin_pillar_broke,
      this.width + 50,
      this.height - 200
    );

    this.ruinPillarBroke3 = new Wall(
      this.game,
      scale,
      ruin_pillar_broke,
      this.width + 550,
      this.height - 300
    );

    this.ruinPillar = new Wall(
      this.game,
      scale,
      ruin_pillar,
      this.width + 100,
      this.height - 100
    );
  }

  draw(context) {
    this.ruinTiles.draw(context);
    this.grassGym.draw(context);
    this.grassMountainAlt.draw(context);
    this.grassMountainSmall.draw(context);
    this.ruinGate.draw(context);
    this.ruinPillarBrokeAlt.draw(context);
    this.ruinPillarBroke.draw(context);
    this.ruinPillarBroke2.draw(context);
    this.ruinPillarBroke3.draw(context);
    this.ruinPillar.draw(context);
  }
}
