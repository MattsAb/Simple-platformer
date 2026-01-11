export class Platform {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 100
    this.height = 20
    this.color = '#705532'
    this.id = '01'
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

export class LongPlatform extends Platform {
  constructor(x, y) {
    super(x, y);

    this.width = 200; 
    this.height = 20; 
    this.id = '02';  
  }
}

export class Spring extends Platform {
  constructor(x, y) {
    super(x, y);

    this.width = 50; 
    this.height = 30; 
    this.id = '03';  
    this.color = "#acbb2a"
  }
}


