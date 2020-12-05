// https://adventofcode.com/2020/day/5

const getSeatIds = (boardingPasses: string) =>
  boardingPasses.split("\n").map(getSeatId);

export const getHighestSeatId = (boardingPasses: string) =>
  getSeatIds(boardingPasses).sort((a, b) => b - a)[0];

export const getSeatId = (data: string) => {
  const rowBinary = data
    .replace(/B/g, "1")
    .replace(/F/g, "0")
    .replace(/[A-Z]/g, "");

  const columnBinary = data
    .replace(/R/g, "1")
    .replace(/L/g, "0")
    .replace(/[A-Z]/g, "");

  const column = parseInt(columnBinary, 2);
  const row = parseInt(rowBinary, 2);

  return row * 8 + column;
};

export const getMySeatId = (boardingPasses: string) => {
  const ids = getSeatIds(boardingPasses);
  const myNeighbor = ids.filter(
    (i) => !ids.includes(i + 1) && ids.includes(i + 2)
  );
  console.log(myNeighbor);
  return myNeighbor[0] + 1;
};
