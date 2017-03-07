// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


var arr = range(1,101);

var square_sum = arr.map(function(n){
  return n * n;
}).reduce(function(a,b){
  return a+b;
});

var sum_arr = arr.reduce(function(a,b){
  return a+b;
});

console.log((sum_arr * sum_arr)-square_sum);








function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}
