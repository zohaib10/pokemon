import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { GrassyArea } from "./grassArea.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  canvas.width = 900;
  canvas.height = 800;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.grassyArea = new GrassyArea(this);
      this.input = new InputHandler();

      //value to scale with
      this.scale = 0.5;
    }
    update(deltaTime) {
      this.player.update(this.input.keys, deltaTime);
    }

    draw(context) {
      this.grassyArea.draw(context);
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  console.log(game);
  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    //requestAnimationFrame will autogenerate timestamp and passes it to the animate function
    requestAnimationFrame(animate);
  }

  //passing 0 as initial value for timestamp
  animate(0);
});
