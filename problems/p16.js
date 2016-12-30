// Power digit sum

// What is the sum of the digits of the number 2^1000

const stringMult = (multiplicand, multiplier) => {
  let res = '';
  let carry = 0;

  for (let i = multiplicand.length - 1; i >= 0; i--) {
    let product = +multiplicand[i] * +multiplier + carry;
    res = (product % 10) + res;
    carry = Math.floor(product / 10);
  }
  if (carry) {
    res = carry + res;
  }

  return res;
};

const stringPow = (n, pow) => {
  let str = '1';

  for (let i = 0; i < pow; i++) {
    str = stringMult(str, n);
  }

  return str;
};

const powerDigitSum = num => num.split('').reduce((sum, n) => sum + +n, 0);

console.log(powerDigitSum(stringPow(2, 1000)));
