export class Timer {
  constructor(game) {
    this.game = game;
    this.timeRemaining = 60;

    this.timerInterval;
  }

  draw(ctx) {
    this.drawTimer(ctx);
    this.timerInterval = setInterval(() => this.countdown(ctx), 1000);
  }

  //draw
  drawTimer(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.font = "48px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";

    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;

    // Format the time as MM:SS
    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    console.log(formattedTime, " formattedTime");
    ctx.fillText(formattedTime, canvas.width / 2, canvas.height / 2);
  }

  countdown(ctx) {
    if (this.timeRemaining > 0) {
      this.timeRemaining--;
      this.drawTimer(ctx);
    } else {
      clearInterval(this.timerInterval); // Stop the countdown when it reaches 0
      ctx.fillText("Time's Up!", canvas.width / 2, canvas.height / 2);
    }
  }
}
