// Number letter counts

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
// how many letters would be used?

const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const numbersToPlace = {
  100: 'hundred',
  1000: 'thousand',
};

// only works up to hundred thousands

const createWordFromNum = (n) => {
  const num = n < 0 ? -n : n;
  if (num <= 20) {
    return numbersToWords[num];
  } else if (n < 100) {
    return n % 10 === 0 ? numbersToWords[num] : `${numbersToWords[Math.floor(num / 10) * 10]}-${numbersToWords[num % 10]}`;
  } else if (n < 1000) {
    const word = `${numbersToWords[Math.floor(n / 100)]} ${numbersToPlace[100]}`;
    return n % 100 === 0 ? word : `${word} and ${createWordFromNum(n % 100)}`;
  }
  const word = `${numbersToWords[Math.floor(n / 1000)]} ${numbersToPlace[1000]}`;
  return n % 1000 === 0 ? word : `${word} and ${createWordFromNum(n % 1000)}`;
};

const countLetters = str => str.split('').reduce((sum, c) => (c.match(/[^ -]/) ? sum + 1 : sum), 0);

const numberLetterCounts = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += countLetters(createWordFromNum(i));
  }

  return sum;
};

console.log(numberLetterCounts(1000));
