// Special Pythagorean triplet

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const sqToNum = {};

for (let i = 1; i < 1000; i++) {
  sqToNum[i * i] = i;
}

for (let a = 1; a < 500; a++) {
  for (let b = 1; b < 500; b++) {
    const sqSum = a * a + b * b;
    const c = sqToNum[sqSum];
    if (c && a + b + c === 1000) {
      console.log(a * b * c);
    }
  }
}
