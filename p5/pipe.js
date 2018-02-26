function Pipe(width, height) {
  this.top = random(height / 2)
  this.bottom = random(height / 2)
  this.x = width
  this.w = 20
  this.minGap = height / 3
  if (height - this.top - this.bottom < this.minGap) {
    this.top = height - this.bottom - this.minGap
  }
  this.isHittedTop = false
  this.isHittedBottom = false
  this.draw = function() {
    this.isHittedTop ? fill(255, 0, 0) : fill(255)
    rect(this.x, 0, this.w, this.top)
    this.isHittedBottom ? fill(255, 0, 0) : fill(255)
    rect(this.x, height - this.bottom, this.w, this.bottom - 1)
  }
  this.update = function() {
    this.x -= speed
  }
  this.isVisible = function() {
    return this.x > 0
  }
  this.checkHit = function(bird) {
    if (bird.x + bird.r > this.x && bird.x < this.x + this.w) {
      if (bird.y < this.top) {
        this.isHittedTop = true
        over = true
      }
      if (bird.y + bird.r > height - this.bottom) {
        this.isHittedBottom = true
        over = true
      }
    }
  }
}
