// Longest Collatz sequence

// Which starting number, under one million, produces the longest chain?

const collatz = (n) => {
  let seqI = n;
  const sequence = [];

  while (seqI > 1) {
    sequence.push(seqI);
    if (seqI % 2 === 0) {
      seqI /= 2;
    } else {
      seqI = (seqI * 3) + 1;
    }
  }
  sequence.push(seqI);

  return sequence;
};

const findLongestCollatzBelow = (n) => {
  let maxStarter = 1;
  let longestSequence = 0;
  let start = Math.floor(n / 2);
  start = start % 2 === 0 ? start - 1 : start;
  for (let i = start; i <= n; i += 2) {
    const sequence = collatz(i);
    const newSequenceLength = sequence.length;
    if (newSequenceLength > longestSequence) {
      maxStarter = i;
      longestSequence = newSequenceLength;
    }
  }

  return maxStarter;
};

// NOTE: TAKES A WHILE
console.log(findLongestCollatzBelow(10 ** 6));
