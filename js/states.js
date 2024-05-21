const states = {
  REST: 0,
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
  LEFT: 4,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class Rest extends State {
  constructor(player) {
    super("Rest");
    this.player = player;
  }

  enter() {
    this.player.frameX = 0;
    this.player.frameY = 0;
  }

  handleInput(input) {
    if (input.includes("ArrowLeft")) {
      this.player.setState(states.LEFT);
    }
    if (input.includes("ArrowRight")) {
      this.player.setState(states.RIGHT);
    }
    if (input.includes("ArrowDown")) {
      this.player.setState(states.DOWN);
    }
    if (input.includes("ArrowUp")) {
      this.player.setState(states.UP);
    }
  }
}

export class Up extends State {
  constructor(player) {
    super("Up");
    this.player = player;
  }
  enter() {
    this.player.frameX = 0;
    this.player.frameY = 3;
  }

  handleInput(input) {
    if (input.includes("ArrowLeft")) {
      this.player.setState(states.LEFT);
    }
    if (input.includes("ArrowRight")) {
      this.player.setState(states.RIGHT);
    }
    if (input.includes("ArrowDown")) {
      this.player.setState(states.DOWN);
    }
  }
}
export class Right extends State {
  constructor(player) {
    super("Right");
    this.player = player;
  }

  enter() {
    this.player.frameX = 0;
    this.player.frameY = 2;
  }

  handleInput(input) {
    if (input.includes("ArrowLeft")) {
      this.player.setState(states.LEFT);
    }
    if (input.includes("ArrowUp")) {
      this.player.setState(states.UP);
    }
    if (input.includes("ArrowDown")) {
      this.player.setState(states.DOWN);
    }
  }
}
export class Down extends State {
  constructor(player) {
    super("Down");
    this.player = player;
  }
  enter() {
    this.player.frameX = 0;
    this.player.frameY = 0;
  }

  handleInput(input) {
    if (input.includes("ArrowLeft")) {
      this.player.setState(states.LEFT);
    }
    if (input.includes("ArrowRight")) {
      this.player.setState(states.RIGHT);
    }
    if (input.includes("ArrowUp")) {
      this.player.setState(states.UP);
    }
  }
}
export class Left extends State {
  constructor(player) {
    super("Left");
    this.player = player;
  }
  enter() {
    this.player.frameX = 0;
    this.player.frameY = 1;
  }

  handleInput(input) {
    if (input.includes("ArrowUp")) {
      this.player.setState(states.UP);
    }
    if (input.includes("ArrowRight")) {
      this.player.setState(states.RIGHT);
    }
    if (input.includes("ArrowDown")) {
      this.player.setState(states.DOWN);
    }
  }
}
