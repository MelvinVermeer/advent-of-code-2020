// https://adventofcode.com/2020/day/3

const product = (a, b) => a * b;

const countTrees = (map, slope) => {
  const [moveX, moveY] = slope;
  let horizontalPosition = 0;
  let treeCount = 0;

  for (let height = 0; height < map.length; height += moveY) {
    const line = map[height];

    if (line[horizontalPosition] === "#") {
      treeCount++;
    }

    horizontalPosition = (horizontalPosition + moveX) % line.length;
  }

  return treeCount;
};

const checkSlopes = (map, slopes) =>
  slopes.map((slope) => countTrees(map, slope)).reduce(product);

module.exports = {
  countTrees,
  checkSlopes,
};
