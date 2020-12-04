// https://adventofcode.com/2020/day/3

const product = (a: number, b: number) => a * b;

export const countTrees = (map: string[], slope: number[]) => {
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

export const checkSlopes = (map: string[], slopes: number[][]) =>
  slopes.map((slope) => countTrees(map, slope)).reduce(product);
