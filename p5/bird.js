function Bird(w, h) {
  this.x = w / 10
  this.y = h / 2
  this.r = Math.min(w / 32, h / 32)
  this.gravity = 4
  this.velocity = 1
  this.draw = function() {
    fill(255)
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r)
  }
  this.update = function() {
    if (this.y < h - this.r) {
      this.y += this.gravity * this.velocity
      this.velocity += 0.1
    }
    if (this.y >= h - this.r) {
      this.y = h - this.r
      over = true
    }
    if (this.y <= this.r) {
      this.y = this.r
      this.velocity = 0.1
    }
  }
  this.jump = function() {
    if (this.y <= h - this.r) {
      this.velocity = -3
    }
  }
  this.start = function() {
    this.y = h / 2
    this.velocity = 1
    over = false
  }
}
