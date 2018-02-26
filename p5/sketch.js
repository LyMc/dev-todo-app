var w = window.innerWidth
var h = window.innerHeight - 4
var bird
var pipes = []
var i = 0
var pipeInterval = 100
var speed = 1
var over = false

function setup() {
  createCanvas(w, h)
  bird = new Bird(w, h)
}

function draw() {
  background(150)
  pipes.forEach(pipe => pipe.draw())
  bird.draw()
  if (over) {
    fill(255, 0, 0)
    textSize(w / 10)
    text('Game over', w / 3.5, h / 2)
  } else {
    speed += 0.001
    bird.update()
    pipes.forEach(pipe => pipe.update())
    if (i++ % pipeInterval === 0) {
      pipes = pipes.filter(pipe => pipe.isVisible())
      pipes.push(new Pipe(w, h))
    }
    pipes.forEach(pipe => pipe.checkHit(bird))
  }
}

function keyPressed() {
  if (key === ' ') {
    if (over) {
      pipes.length = 0
      speed = 1
      bird.start()
    } else {
      bird.jump()
    }
  }
}
function touchStarted() {
  if (over) {
    pipes.length = 0
    speed = 1
    bird.start()
  } else {
    bird.jump()
  }
}
