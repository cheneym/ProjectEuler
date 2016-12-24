// Sum square difference

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sqSum = 0;
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sqSum += i * i;
  sum += i;
}

const sumSq = sum * sum;

console.log(sumSq - sqSum);
