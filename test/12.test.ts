import { sample, data } from "../data/12";
import { manhattanDistance } from "../src/12-rain-risk";

describe("12 - Rain Risk", () => {
  describe("p1", () => {
    it("test", () => {
      expect(manhattanDistance(sample, "ship", [1, 0])).toEqual(25);
    });

    it("answer", () => {
      expect(manhattanDistance(data, "ship", [1, 0])).toEqual(923);
    });
  });

  describe("p2", () => {
    it("test", () => {
      expect(manhattanDistance(sample, "waypoint", [10, -1])).toEqual(286);
    });

    it("answer", () => {
      expect(manhattanDistance(data, "waypoint", [10, -1])).toEqual(24769);
    });
  });
});
