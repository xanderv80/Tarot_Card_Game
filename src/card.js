export default class Card {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(20, 20, 20, 20);
  }
}
