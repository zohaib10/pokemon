import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Wall } from "./wall.js";
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
      // this.tree = new Wall(this, house_small);
      this.house = new Wall(this, house_small);
      //value to scale with
      this.scale = 0.5;
    }
    update(deltaTime) {
      this.player.update(this.input.keys, deltaTime);
    }

    draw(context) {
      this.player.draw(context);
      this.house.draw(context);
      // this.tree.draw(context);
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
