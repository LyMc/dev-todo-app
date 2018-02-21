function log(...rest) {
  console.log(...rest)
}
// tasks 3. Modulo operator
// function seq(n) {
//   var s = []
//   for (var i = 0; i < n; i++) {
//     s.push(i%2)
//   }
//   return s
// }
// function seq2(prev) {
//   return prev = (prev + 1) % 2
// }
// function seq3(prev) {
//   return prev = prev ? 0 : 1
// }
// function reverse(n) {
//   var res = 0
//   while (n) {
//     res = res * 10 + n % 10
//     n = Math.floor(n / 10)
//   }
//   return res
// }

function bubbleSort(array) {
  var t = 0
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array
}

log(bubbleSort([5, 3, 1, 6, 10, 99, 1, 4]))
