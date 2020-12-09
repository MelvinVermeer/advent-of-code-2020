import { sample, data } from "../data/09";
import { findWeakNumber, findWeakSet } from "../src/09-encoding-error";

describe("09 - Encoding Error", () => {
  describe("find the first number in the list which is NOT the sum of two of the 25 (preamble size) numbers before it", () => {
    it("test case ", () => {
      expect(findWeakNumber(sample, 5)).toEqual(127);
    });

    it("answer", () => {
      expect(findWeakNumber(data, 25)).toEqual(18272118);
    });
  });

  describe("add together the smallest and largest number in the contiguous range, that sums to the weak number", () => {
    it("test case ", () => {
      expect(findWeakSet(sample, 5)).toEqual(62);
    });

    it("answer", () => {
      expect(findWeakSet(data, 25)).toEqual(2186361);
    });
  });
});
