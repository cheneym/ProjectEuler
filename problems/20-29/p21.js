// Amicable numbers

// Evaluate the sum of all the amicable numbers under 10000

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

const amicableNumberSum = (limit) => {
  let sum = 0;
  const mem = {};

  for (let i = 2; i < limit; i++) {
    const pds = properDivisorSum(i);
    if (i === properDivisorSum(pds) && i !== pds && !mem[i] && !mem[pds]) {
      sum += i;
      sum += pds;
      mem[i] = true;
      mem[pds] = true;
    }
  }

  return sum;
};

console.log(amicableNumberSum(10000));
