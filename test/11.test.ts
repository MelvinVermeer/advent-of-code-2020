import { data, sample } from "../data/11";
import {
  countSeatAfterStabilization,
  adjacentSeatRule,
  visibleSeatRule,
} from "../src/11-seating-system";

describe("11 - Seating System", () => {
  describe("Count occupied seats in stable situation, adjacent rule", () => {
    it("test case", () => {
      expect(countSeatAfterStabilization(sample, adjacentSeatRule)).toEqual(37);
    });

    it("answer", () => {
      expect(countSeatAfterStabilization(data, adjacentSeatRule)).toEqual(2472);
    });
  });

  describe("Count occupied seats in stable situation, visible rule", () => {
    it("test case", () => {
      expect(countSeatAfterStabilization(sample, visibleSeatRule)).toEqual(26);
    });

    it("answer", () => {
      expect(countSeatAfterStabilization(data, visibleSeatRule)).toEqual(2197);
    });
  });
});
