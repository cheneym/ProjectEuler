// Lattice paths

// How many such routes are there through a 20×20 grid?

const countLatticePaths = (n) => {
  const memo = {};
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i === 0 || j === 0) {
        memo[`${i}-${j}`] = 1;
      } else {
        memo[`${i}-${j}`] = memo[`${i - 1}-${j}`] + memo[`${i}-${j - 1}`];
      }
    }
  }

  return memo[`${n}-${n}`];
};

console.log(countLatticePaths(20));
