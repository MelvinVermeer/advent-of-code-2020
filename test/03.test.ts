import { countTrees, checkSlopes } from "../src/03-toboggan-trajectory";
import { data } from "../data/03";

const dataSample = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

describe("03 - Toboggan Trajectory", () => {
  describe("Counts encountered trees when with slope right 3 down 1", () => {
    const slope = [3, 1];

    it("Test case", () => {
      expect(countTrees(dataSample, slope)).toEqual(7);
    });

    it("Answer", () => {
      expect(countTrees(data, slope)).toEqual(200);
    });
  });

  describe("Multiplies tree count for slopes", () => {
    const slopes = [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ];

    it("Test case", () => {
      expect(checkSlopes(dataSample, slopes)).toEqual(336);
    });

    it("Answer", () => {
      expect(checkSlopes(data, slopes)).toEqual(3737923200);
    });
  });
});
