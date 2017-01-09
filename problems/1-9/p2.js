// Even Fibonacci numbers

// Find the sum of even valued fibbonaci terms

// 1, 2, 3, 4, 8, 13, 21, 35, 55, 89

const sumEvenFib = (n) => {
  let oldVal = 1;
  let temp;
  let newVal = 1;
  let sum = 0;
  while (newVal < n) {
    if (newVal % 2 === 0) { sum += newVal; }
    temp = newVal;
    newVal += oldVal;
    oldVal = temp;
  }

  return sum;
};

console.log(sumEvenFib(4000000));
