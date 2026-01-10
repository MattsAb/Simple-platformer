export class Pillar {
  constructor(x, y, width = 100, height = 200) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = 'black'
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
