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

// function bubbleSort(array) {
//   var t = 0
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       if (array[i] < array[j]) {
//         [array[i], array[j]] = [array[j], array[i]]
//       }
//     }
//   }
//   return array
// }
//
// log(bubbleSort([5, 3, 1, 6, 10, 99, 1, 4]))

// course 4
// task 6-7
// function checkConsec(list) {
//   var dir = list[1] - list[0]
//   for (var i in list) {
//     i = parseInt(i)
//     if (i === list.length - 1) return null
//     if (list[i] + dir === list[i + 1]) continue
//     return list[i + 1]
//   }
// }
//
// log(checkConsec([2, 1, 0, 1, 3]))

// function countChars(string, withSort = false) {
//   var counts = {}
//   for (var i in string) {
//     var k = string[i]
//     counts[k] = counts[k] ? counts[k] + 1 : 1
//   }
//   if (withSort) {
//     counts = Object.entries(counts).sort((a, b) => b[1] - a[1])
//   }
//   return counts
// }
// log(countChars('hello+)(90000023940                 ieojdsi ojsof)'))

// course 5
// task 6
/* function avg() {
  // var sum = 0
  // for (var i in arguments) {
  //   sum += arguments[i]
  // }
  return Object.values(arguments).reduce((sum, add) => sum + add, 0) / arguments.length
}
log(avg(1, 2, 3))
log(avg.call(null, 4, 5, 6))
log(avg.apply(null, [7, 8, 9])) */

// task 9
// function sum(a) {
//   return function(b) {
//     return a + b
//   }
// }
// const sum = a => b => a + b
// log(sum(20)(10))

// task 10
// function findMax(items) {
//   var max = items[0]
//   items.forEach(item => {
//     if (item > max) {
//       max = item
//     }
//   })
//   return max
// }
// log(findMax([1, 2, 3, 2, 3, 6, 1, 2, 1]))

// mostenire
// function Point(x, y) {
//   this.x = x
//   this.y = y
// }
// Point.prototype.sum = function() {
//   console.log(this.x, this.y, this.x + this.y)
// }
// function ZPoint(x, y, z) {
//   Point.call(this, x, y)
//   this.z = z
// }
//
// ZPoint.prototype = Object.create(Point.prototype)
// ZPoint.prototype.constructor = ZPoint
