var n = 10;

function isPrime(x){
  for(var i=2;i<Math.sqrt(x);i++){
    if (x % i === 0){
      return false;
    }
  }
  return true;
}
var k = [];
for(var i=2;i<=n;i++){
  k.push(i);
}
var product = 1;
var primes = k.filter(isPrime);

console.log(primes);

primes.forEach(function(x){
  while(x*x < n){
    x = x * x;
  }
  product = product * x;
});

console.log(product);
