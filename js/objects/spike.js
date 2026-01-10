export class Spike {
  constructor(x, y, numberOfSpikes = 0) {
    this.numberOfSpikes = numberOfSpikes
    this.x = x
    this.y = y
    this.singleWidth = 50
    this.width = this.singleWidth * numberOfSpikes
    this.height = 50
    this.color = 'black'
    this.type = 'hostile'
  }

draw(ctx) {
    for (let i = 0; i < this.numberOfSpikes; i++)
    {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x + (this.singleWidth * i), this.y + this.height); 
    ctx.lineTo(this.x + (this.singleWidth* i) + this.singleWidth / 2, this.y - this.height + this.height);
    ctx.lineTo(this.x + (this.singleWidth * i) + this.singleWidth, this.y + this.height); 
    ctx.closePath();
    ctx.fill();
    }
}

}
