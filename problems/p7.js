// 10001st prime

// What is the 10 001st prime number?

const getNthPrime = (n) => {
  const primes = [];
  const allNums = [];
  
  for (let i = 2; primes.length < n; i++) {
    if (allNums[i] === undefined) {
      primes.push(i);
      for (let j = i * i; j <= 1000000; j += i) {
        allNums[j] = false;
      }
    }
  }

  return primes[n - 1];
};

console.log(getNthPrime(10001));
