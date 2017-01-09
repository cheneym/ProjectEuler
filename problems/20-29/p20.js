// Factorial digit sum

// Find the sum of the digits in the number 100!

const multiplyOneDigit = (m1, m2) => {
  const multiplicand = m1.split('').reverse().map(Number);
  const multiplier = +m2;
  const product = [];
  let carry = 0;
  let tempProduct;
  for (let i = 0; i < multiplicand.length; i++) {
    tempProduct = (multiplicand[i] * multiplier) + carry;
    carry = Math.floor(tempProduct / 10);
    product[i] = tempProduct % 10;
  }
  if (carry) { product.push(carry); }

  return product.reverse().join('');
};

const addNumbers = (n1, n2) => {
  const a1 = n1.split('').reverse().map(Number);
  const a2 = n2.split('').reverse().map(Number);
  const len = Math.max(a1.length, a2.length);
  const sum = [];
  let tempSum = 0;
  let carry = 0;
  for (let i = 0; i < len; i++) {
    a1[i] = a1[i] === undefined ? 0 : a1[i];
    a2[i] = a2[i] === undefined ? 0 : a2[i];
    tempSum = a1[i] + a2[i] + carry;
    carry = Math.floor(tempSum / 10);
    sum[i] = tempSum % 10;
  }
  if (carry) { sum.push(carry); }

  return sum.reverse().join('');
};

const pad = n => new Array(n + 1).join('0');

const multiply = (m1, m2) => {
  const multiplicand = m1;
  const multipliers = m2.split('');
  return multipliers.reverse().reduce((product, multiplier, i) =>
    addNumbers(product, multiplyOneDigit(`${multiplicand}${pad(i)}`, multiplier))
  , '');
};

const factorial = (n) => {
  let fact = '1';

  for (let i = 1; i <= n; i++) {
    fact = multiply(fact, i.toString());
  }

  return fact;
};

console.log(factorial(100).split('').map(Number).reduce((sum, digit) => sum + digit, 0));
