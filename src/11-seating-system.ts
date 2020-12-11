const OCCUPIED = "#";
const EMPTY_SEAT = "L";

const DIRECTIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const isSeatEmpty = (value: string) => value === EMPTY_SEAT;
const isSeatOccupied = (value: string) => value === OCCUPIED;

const arrangementToString = (arrangement: string[][]) =>
  arrangement.map((row) => row.join("")).join("\n");

const isInRange = (i: number, j: number, arr: string[][]) =>
  i >= 0 && j >= 0 && i < arr.length && j < arr[0].length;

const canSeeOccupiedSeat = (
  i: number,
  j: number,
  [vx, vy]: number[],
  arr: string[][]
) => {
  let newI = i + vy;
  let newJ = j + vx;

  while (isInRange(newI, newJ, arr)) {
    if (isSeatOccupied(arr[newI][newJ])) {
      return true;
    }

    if (isSeatEmpty(arr[newI][newJ])) {
      return false;
    }

    newI += vy;
    newJ += vx;
  }

  return false;
};

const countVisibleOccupiedSeats = (i: number, j: number, arr: string[][]) =>
  DIRECTIONS.filter((direction) => canSeeOccupiedSeat(i, j, direction, arr))
    .length;

const countAdjacentOccupiedSeats = (i: number, j: number, arr: string[][]) =>
  DIRECTIONS.map(([x, y]) => [i + x, j + y])
    .filter(([x, y]) => isInRange(x, y, arr))
    .filter(([x, y]) => isSeatOccupied(arr[x][y])).length;

export const adjacentSeatRule = (i: number, j: number, arr: string[][]) => {
  const adjacentOccupied = countAdjacentOccupiedSeats(i, j, arr);

  if (isSeatEmpty(arr[i][j]) && adjacentOccupied === 0) {
    return OCCUPIED;
  }
  if (isSeatOccupied(arr[i][j]) && adjacentOccupied >= 4) {
    return EMPTY_SEAT;
  }

  return arr[i][j];
};

export const visibleSeatRule = (i: number, j: number, arr: string[][]) => {
  const adjacentOccupied = countVisibleOccupiedSeats(i, j, arr);

  if (isSeatEmpty(arr[i][j]) && adjacentOccupied === 0) {
    return OCCUPIED;
  }
  if (isSeatOccupied(arr[i][j]) && adjacentOccupied >= 5) {
    return EMPTY_SEAT;
  }

  return arr[i][j];
};

const rearrange = (
  arrangement: string[][],
  rule: (i: number, j: number, arr: string[][]) => string
) => {
  const newArrangement: string[][] = [[]];

  for (let i = 0; i < arrangement.length; i++) {
    newArrangement[i] = [];
    for (let j = 0; j < arrangement[i].length; j++) {
      newArrangement[i][j] = rule(i, j, arrangement);
    }
  }

  return newArrangement;
};

const isEqualArrangement = (x: string[][], y: string[][]) =>
  arrangementToString(x) === arrangementToString(y);

export const countSeatAfterStabilization = (
  data: string,
  rule: (i: number, j: number, arr: string[][]) => string
) => {
  let previousArrangement = data.split("\n").map((row) => row.split(""));
  let newArrangement = rearrange(previousArrangement, rule);

  while (!isEqualArrangement(newArrangement, previousArrangement)) {
    previousArrangement = newArrangement;
    newArrangement = rearrange(newArrangement, rule);
  }

  return newArrangement.flat().filter(isSeatOccupied).length;
};
