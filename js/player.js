import { Up, Left, Right, Down, Rest } from "./states.js";

export class Player {
  constructor(game) {
    this.game = game;
    this.height = 128;
    this.width = 128;

    this.image = player;

    //coordinates
    this.x = 1215;
    this.y = 520;

    // Player States
    this.states = [
      new Rest(this),
      new Up(this),
      new Right(this),
      new Down(this),
      new Left(this),
    ];
    this.currentState = this.states[0];
    this.currentState.enter();

    //Image States / Frames
    this.frameX = 0;
    this.frameY = 0;

    //sprite animation speed
    this.frameTimer = 0;
    this.maxFrame = 3;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
  }

  update(input, deltaTime) {
    this.currentState.handleInput(input);
    //Horizontal & Vertical Movement
    if (input.includes("ArrowRight") && !this.rightOutOfBounds()) {
      this.x += 2;
      this.cycleFrames(deltaTime);
    } else if (input.includes("ArrowLeft") && !this.leftOutOfBounds()) {
      this.x -= 2;
      this.cycleFrames(deltaTime);
    } else if (input.includes("ArrowDown") && !this.downOutOfBounds()) {
      this.y += 2;
      this.cycleFrames(deltaTime);
    } else if (input.includes("ArrowUp") && !this.upOutOfBounds()) {
      this.y -= 2;
      this.cycleFrames(deltaTime);
    }

    //Sprite Animation
  }

  rightOutOfBounds() {
    return this.x + this.width * this.game.scale > this.game.width;
  }
  leftOutOfBounds() {
    return this.x < -16;
  }
  upOutOfBounds() {
    return this.y < 0;
  }
  downOutOfBounds() {
    return this.y + this.height * this.game.scale > this.game.height;
  }

  cycleFrames(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) {
        this.frameX += 1;
      } else {
        this.frameX = 0;
      }
    } else {
      this.frameTimer += deltaTime;
    }
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * this.game.scale,
      this.height * this.game.scale
    );
  }

  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
}
