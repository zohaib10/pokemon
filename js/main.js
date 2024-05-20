import { Player } from "./player.js";
import { InputHandler } from "./input.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  canvas.width = 900;
  canvas.height = 600;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler();

      //value to scale with
      this.scale = 0.5;
    }
    update(deltaTime) {
      this.player.update(this.input.keys, deltaTime);
    }

    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate();
});
