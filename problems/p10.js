// Summation of primes

// Find the sum of all the primes below two million.

const getSumPrimesBelow = (n) => {
  const allNums = [];
  let sum = 0;

  for (let i = 2; i < n; i++) {
    if (allNums[i] === undefined) {
      sum += i;
      for (let j = i * i; j <= n; j += i) {
        allNums[j] = false;
      }
    }
  }

  return sum;
};

console.log(getSumPrimesBelow(2000000));
