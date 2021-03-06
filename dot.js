const PI2 = Math.PI * 2
const BOUNCE = 0.082

export class Dot {
  constructor(c, y, radius, pixelSize, red, green, blue, scale) {
    this.x = y
    this.y = y
    const ratio = radius / 256 / 2
    this.targetRadius = ratio * scale
    this.radius = 0
    this.radiusV = 0
    this.pixelSize = pixelSize
    this.pixelSizeHalf = pixelSize / 2
    this.red = red
    this.green = green
    this.blue = blue
  }

  animate(ctx) {
    // ctx.beginPath()
    // ctx.fillSyle = '#fff'
    // ctx.fillRect(
    //   this.x - this.pixelSizeHalf,
    //   this.y - this.pixelSizeHalf,
    //   this.pixelSize, this.pixelSize
    // )

    const accel = (this.targetRadius - this.radius) / 2
    this.radiusV += accel
    this.radiusV *= BOUNCE
    this.radiusV += this.radiusV

    ctx.beginPath()
    ctx.fillStyle = '#000'  //`rgb(${this.red}, ${this.green}, ${this.blue})`
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false)
    ctx.fill()
  }

  reset() {
    this.radius = 0
    this.radiusV = 0
  }
}