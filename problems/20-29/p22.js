// Names scores

// What is the total of all the name scores in the file?

const fs = require('fs');

const names = fs.readFileSync('./p22.txt', 'utf-8').split(',').map(name => name.slice(1, -1)).sort();

const sumAlphabeticalValue = str =>
  str.split('').reduce((sum, chr) => (sum + chr.charCodeAt()) - 64, 0);

const totalScore = words =>
  words.reduce((sum, word, i) => sum + (sumAlphabeticalValue(word) * (i + 1)), 0);

console.log(totalScore(names));
