import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Tile } from "./tile.js";
import { Wall } from "./wall.js";
import { WallLayer } from "./wallLayer.js";
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth - 100;
  canvas.height = window.innerHeight - 200;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler();
      this.tiles = new Tile(this);

      // Wall Layer
      this.house = new Wall(
        this,
        house_small,
        canvas.width - house_small.width,
        canvas.height - house_small.height
      );
      this.houseAlt = new Wall(
        this,
        house_small_alt,
        canvas.width - house_small_alt.width - 250,
        canvas.height - house_small_alt.height
      );
      this.hospital = new Wall(
        this,
        hospital,
        canvas.width / 4,
        canvas.height / 4
      );
      this.tree = new Wall(
        this,
        grass_tree,
        canvas.width - house_small_alt.width + 100,
        canvas.width - house_small_alt.width - 200
      );
      this.bushyTree = new Wall(
        this,
        grass_tree_bushy,
        canvas.width - house_small_alt.width + 200,
        canvas.width - house_small_alt.width - 200
      );

      this.treeSmall = new Wall(
        this,
        grass_tree_small,
        canvas.width - house_small_alt.width + 250,
        canvas.width - house_small_alt.width - 200
      );

      //value to scale with

      this.scale = 0.5;
    }
    update(deltaTime) {
      this.player.update(this.input.keys, deltaTime);
    }

    drawWallLayer() {
      this.house.draw(ctx);
      this.houseAlt.draw(ctx);
      this.hospital.draw(ctx);
      this.tree.draw(ctx);
      this.bushyTree.draw(ctx);
      this.treeSmall.draw(ctx);
    }

    draw(context) {
      this.tiles.draw(context);
      this.drawWallLayer();
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;

  function animate(timestamp) {
    const deltaTime = timestamp - lastTime;

    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate(0);
});
