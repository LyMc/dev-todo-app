var t
count = 0

function start() {
  if (!t) {
    // t = setTimeout(timedCount, 1000)
    t = setInterval(timedCount, 1000)
  }
}
function stop() {
  if (t) {
    // clearTimeout(t)
    clearInterval(t)
    t = 0
  }
}
function timedCount () {
  counter.value = ++count
  //t = setTimeout(timedCount, 1000)
}
