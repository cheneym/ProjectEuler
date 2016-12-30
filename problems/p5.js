// Smallest multiple

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Brute force

// const smallestDivisibleBy = (start, end) => {
//   const range = [];
//   for (let i = start; i <= end; i++) {
//     range.push(i);
//   }
//   let allDivisible = false;

//   let i = end;
//   while (!allDivisible) {
//     allDivisible = range.every(n => i % n === 0);
//     console.log(i);
//     i++;
//   }

//   return i - 1;
// };

const getLowestFactors = (n) => {
  const factors = {};
  let dividend = n;
  let divisor = 2;

  while (dividend > 1) {
    while (dividend % divisor !== 0) {
      divisor++;
    }
    factors[divisor] = factors[divisor] || 0;
    while (dividend % divisor === 0) {
      factors[divisor]++;
      dividend /= divisor;
    }
  }

  return factors;
};

const smallestDivisibleBy = (start, end) => {
  const highestNumFactors = {};

  for (let i = start; i <= end; i++) {
    const factors = getLowestFactors(i);
    Object.keys(factors).forEach((factor) => {
      highestNumFactors[factor] = highestNumFactors[factor] || 0;
      highestNumFactors[factor] = Math.max(highestNumFactors[factor], factors[factor]);
    });
  }
  console.log(highestNumFactors);
  return Object.keys(highestNumFactors).reduce((product, factor) =>
    product * ((+factor) ** highestNumFactors[factor])
  , 1);
};

console.log(smallestDivisibleBy(1, 20));
