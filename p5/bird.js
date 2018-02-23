function Bird(w, h) {
  this.x = w / 10
  this.y = h / 2
  var r = Math.min(w / 32, h / 32)
  this.gravity = 4
  this.velocity = 1
  this.over = false
  this.draw = function() {
    fill(255)
    ellipse(this.x, this.y, 2 * r, 2 * r)
  }
  this.update = function() {
    if (this.y < h - r) {
      this.y += this.gravity * this.velocity
      this.velocity += 0.1
    }
    if (this.y >= h - r) {
      this.y = h - r
      this.over = true
    }
    if (this.y <= r) {
      this.y = r
      this.velocity = 0.1
    }
  }
  this.jump = function() {
    if (this.y <= h - r) {
      this.velocity = -3
    }
  }
  this.start = function() {
    this.y = h / 2
    this.velocity = 1
    this.over = false
  }
}
