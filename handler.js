const lines = require('./index.json');

const randomLine = () => {
  return lines[Math.floor(Math.random() * lines.length)];
}

/**
 * Get N random jokes from a jokeArray
 */
const randomN = (lineArray, n) => {
  const limit = lineArray.length < n ? lineArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * lineArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return lineArray[randomIndex];
  });
};

const lineByType = (type, n) => {
  return randomN(lines.filter(joke => joke.type === type), n);
};

module.exports = { lines, randomLine, randomN, lineByType };
