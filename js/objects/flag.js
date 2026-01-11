export class Flag {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 5
    this.height = 100
    this.type = 'flag';
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);


    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x + this.width, this.y);
    ctx.lineTo(this.x + 30, this.y + 15);
    ctx.lineTo(this.x + this.width, this.y + 30);
    ctx.closePath();
    ctx.fill();
  }
}
