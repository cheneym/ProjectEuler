// Largest palindrome product

// Find the largest palindrome made from the product of two 3-digit numbers

const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

const largestPalindromeProduct = (digits) => {
  let lpp = 0;
  let product;
  for (let i = 1; i < 999; i++) {
    for (let j = 1; j < 999; j++) {
      product = i * j;
      if (isPalindrome('' + product)) {
        lpp = Math.max(lpp, product);
      }
    }
  }

  return lpp;
};

console.log(largestPalindromeProduct(3));