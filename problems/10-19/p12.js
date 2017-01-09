// Highly divisible triangular number

// What is the value of the first triangle number to have over five hundred divisors?

const getFactors = (n) => {
  const factors = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
      if (n / i !== i) {
        factors.push(n / i);
      }
    }
  }

  return factors;
};

const findHDTriangleNum = (limit) => {
  let triangleNum = 0;
  let factors = [];

  for (let i = 1; factors.length <= limit; i++) {
    triangleNum += i;
    factors = getFactors(triangleNum);
  }

  return triangleNum;
};

console.log(findHDTriangleNum(500));
