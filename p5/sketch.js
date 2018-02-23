var w = window.innerWidth
var h = window.innerHeight - 4
var bird

function setup() {
  createCanvas(w, h)
  bird = new Bird(w, h)
}

function draw() {
  background(150)
  bird.draw()
  if (bird.over) {
    fill(255, 0, 0)
    textSize(w / 10)
    text('Game over', w / 3.5, h / 2)
  } else {
    bird.update()
  }
}

function keyPressed() {
  if (key === ' ') {
    if (bird.over) {
      bird.start()
    } else {
      bird.jump()
    }
  }
}
