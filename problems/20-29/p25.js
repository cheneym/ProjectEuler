// 1000-digit Fibonacci number

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

const stringAdd = (a, b) => {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let sum = '';
  let ai;
  let bj;
  let tempSum;

  while (i >= 0 || j >= 0) {
    ai = a[i] === undefined ? 0 : +a[i];
    bj = b[j] === undefined ? 0 : +b[j];
    tempSum = ai + bj + carry;
    carry = Math.floor(tempSum / 10);
    sum = (tempSum % 10) + sum;
    i--;
    j--;
  }
  if (carry) { sum = carry + sum; }

  return sum;
};

const firstFibWith1000Digits = () => {
  let i = 2;
  let a1 = '1';
  let a2 = '1';
  let temp;

  while (a2.length !== 1000) {
    temp = a2;
    a2 = stringAdd(a1, a2);
    a1 = temp;
    i++;
  }

  return i;
};

console.log(firstFibWith1000Digits());
