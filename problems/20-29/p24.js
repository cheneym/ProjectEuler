// Lexicographic permutations

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

const swap = (i, j, arr) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const reverse = (i, j, arr) => {
  while (i < j) {
    swap(i, j, arr);
    i++;
    j--;
  }
};

const findNextLarger = (startIndex, arr) => {
  let min = Infinity;
  let minIndex = -1;
  for (let i = startIndex + 1; i < arr.length; i++) {
    if ((arr[i] > arr[startIndex]) && (arr[i] < min)) {
      minIndex = i;
      min = arr[i];
    }
  }
  return minIndex;
};

const makeNextLexicographicPermutation = (arr) => {
  if (arr.length === 1) { return; }
  let i;
  for (i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      break;
    }
  }
  if (i === -1) { return; }
  const swapIndex = findNextLarger(i, arr);
  swap(i, swapIndex, arr);
  reverse(i + 1, arr.length - 1, arr);
};

const factorial = (n) => {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

const nthLexicographicPermutation = (n, nums) => {
  const numsCopy = nums.slice();
  const possibleCombinations = factorial(numsCopy.length);
  const permutationNumber = n % possibleCombinations;
  if (permutationNumber === 0) { return numsCopy.reverse().join(''); }
  for (let i = 1; i < permutationNumber; i++) {
    makeNextLexicographicPermutation(numsCopy);
  }
  return numsCopy.join('');
};

console.log(nthLexicographicPermutation(1000000, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
