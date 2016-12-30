// Largest prime factor

// What is the largest prime factor of the number 600851475143

const isPrime = (n) => {
  if (n <= 1) { return false; }

  for (let i = 2; i ** 2 <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const findHighestPrime = arr =>
  arr.reduce((largestPrime, factor) =>
    isPrime(factor) ? Math.max(largestPrime, factor) : largestPrime
  , 0);

const largestPrimeFactor = (n) => {
  const factors = [];
  for (let i = 1; i ** 2 <= n; i++) {
    const factor = n / i;
    if (factor === Math.floor(factor)) {
      factors.push(i);
      factors.push(factor);
    }
  }

  return findHighestPrime(factors);
};

console.log(largestPrimeFactor(600851475143));
