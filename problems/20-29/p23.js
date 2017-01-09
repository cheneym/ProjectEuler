// Non-abundant sums

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers
// Numbers > 28123 can be expressed as sum of two abundant numbers

const properDivisorSum = (n) => {
  if (n <= 1) { return 0; }

  let sum = 1;

  for (let i = 2; i * i <= n; i++) {
    if (i * i === n) {
      sum += i;
    } else if (n % i === 0) {
      sum += i;
      sum += n / i;
    }
  }

  return sum;
};

const sumOfNumsNotAbundant = (n) => {
  const abundantNums = [];
  const abundantNumMap = {};

  for (let i = 2; i <= n; i++) {
    if (properDivisorSum(i) > i) {
      abundantNums.push(i);
      abundantNumMap[i] = true;
    }
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (abundantNums.every(abundantNum => !abundantNumMap[i - abundantNum])) {
      sum += i;
    }
  }

  return sum;
};

console.log(sumOfNumsNotAbundant(28123));
