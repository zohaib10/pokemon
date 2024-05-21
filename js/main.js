import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Tile } from "./tile.js";
import { Grass } from "./grassArea.js";
import { Town } from "./town.js";
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  canvas.width = 1400;
  canvas.height = 800;

  class Game {
    constructor(width, height, scale) {
      this.width = width;
      this.height = height;
      this.scale = scale;
      this.player = new Player(this);
      this.grass = new Grass(this);
      this.input = new InputHandler();
      this.tiles = new Tile(this);
      this.wallLayer = new Town(canvas.width, canvas.height, this.scale);
      //value to scale with
    }
    update(deltaTime) {
      this.player.update(this.input.keys, deltaTime);
      this.grass.update();
    }

    draw(context) {
      this.tiles.draw(context);
      this.wallLayer.draw(context);
      this.grass.draw(context);
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height, 0.5);
  let lastTime = 0;

  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    //requestAnimationFrame will autogenerate timestamp and passes it to the animate function
    requestAnimationFrame(animate);
  };

  //passing 0 as initial value for timestamp
  animate(0);
});
