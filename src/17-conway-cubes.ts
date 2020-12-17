type PocketDimension = State[][][];
type State = "#" | ".";
type Coordinate = { x: number; y: number; z: number };
type StateFunction = (
  coordinate: Coordinate,
  pocketDimension: PocketDimension
) => State;

const ACTIVE = "#";
const INACTIVE = ".";

const NEIGHBORS = [
  [-1, -1, -1],
  [0, -1, -1],
  [1, -1, -1],

  [-1, 0, -1],
  [0, 0, -1],
  [1, 0, -1],

  [-1, 1, -1],
  [0, 1, -1],
  [1, 1, -1],

  [-1, -1, 0],
  [0, -1, 0],
  [1, -1, 0],

  [-1, 0, 0],
  // [0, 0, 0], self
  [1, 0, 0],

  [-1, 1, 0],
  [0, 1, 0],
  [1, 1, 0],

  [-1, -1, 1],
  [0, -1, 1],
  [1, -1, 1],

  [-1, 0, 1],
  [0, 0, 1],
  [1, 0, 1],

  [-1, 1, 1],
  [0, 1, 1],
  [1, 1, 1],
];

const countActiveNeighbors = (
  { x, y, z }: Coordinate,
  pocketDimension: PocketDimension
): number => {
  return NEIGHBORS.filter(([xx, yy, zz]) => {
    try {
      return pocketDimension[z + zz][y + yy][x + xx] === ACTIVE;
    } catch {
      return false;
    }
  }).length;
};

const getState: StateFunction = ({ x, y, z }, pocketDimension) => {
  const isActive = pocketDimension[z][y][x] === ACTIVE;

  const activeNeighbors = countActiveNeighbors({ x, y, z }, pocketDimension);
  if (isActive && activeNeighbors > 1 && activeNeighbors < 4) {
    return ACTIVE;
  }

  if (!isActive && activeNeighbors === 3) {
    return ACTIVE;
  }

  return INACTIVE;
};

// const print = (pocketDimension: PocketDimension) => {
//   for (let z = 0; z < pocketDimension.length; z++) {
//     const layer = pocketDimension[z];
//     console.log(`Z=${z}`);

//     for (let y = 0; y < layer.length; y++) {
//       const row = layer[y];
//       console.log(row.join(""));
//     }

//     console.log(` `);
//   }
// };

const expand = (pocketDimension: PocketDimension) => {
  let expanded: PocketDimension = [[[]]];
  const newZ = pocketDimension.length + 2;
  const newY = pocketDimension[0].length + 2;
  const newX = pocketDimension[0][0].length + 2;

  const emptyRow = new Array(newX).fill(INACTIVE);
  const emptyPlane = new Array(newY).fill(emptyRow);

  expanded[0] = emptyPlane;

  for (let z = 0; z < pocketDimension.length; z++) {
    expanded[z + 1] = [];
    expanded[z + 1][0] = emptyRow;

    for (let y = 0; y < pocketDimension[z].length; y++) {
      expanded[z + 1][y + 1] = [];
      expanded[z + 1][y + 1][0] = INACTIVE;

      for (let x = 0; x < pocketDimension[z][y].length; x++) {
        expanded[z + 1][y + 1][x + 1] = pocketDimension[z][y][x];
      }

      expanded[z + 1][y + 1][newX - 1] = INACTIVE;
    }

    expanded[z + 1][newY - 1] = emptyRow;
  }

  expanded[newZ - 1] = emptyPlane;

  return expanded;
};

const cycle = (
  pocketDimension: PocketDimension,
  stateFunction: StateFunction
): PocketDimension => {
  let newCycle: PocketDimension = [[[]]];

  for (let z = 0; z < pocketDimension.length; z++) {
    newCycle[z] = [];
    for (let y = 0; y < pocketDimension[z].length; y++) {
      newCycle[z][y] = [];
      for (let x = 0; x < pocketDimension[z][y].length; x++) {
        newCycle[z][y][x] = stateFunction({ x: x, y, z }, pocketDimension);
      }
    }
  }

  return newCycle;
};
const toPocketDimension = (s: string): PocketDimension => [
  s.split("\n").map((z) => z.split("").map((x) => x as State)),
];

export const countActive = (s: string): number => {
  let bootCycles = 6;
  let iteration = cycle(expand(toPocketDimension(s)), getState);

  while (--bootCycles) {
    iteration = cycle(expand(iteration), getState);
  }

  const totalActive = iteration
    .flat(2)
    .filter((state: State) => state === ACTIVE).length;

  return totalActive;
};
