import { sample, data, sample2 } from "../data/07";
import { count, countContents } from "../src/07-handy-haversacks";

describe("07", () => {
  describe("number of bag colors that can eventually hold my shiny gold bag", () => {
    it("test case ", () => {
      expect(count(sample)).toEqual(4);
    });

    it("answer", () => {
      expect(count(data)).toEqual(128);
    });
  });

  describe("number of bags i need to buy for inside my bag", () => {
    it("test case ", () => {
      expect(countContents(sample)).toEqual(32);
    });

    it("test case 2", () => {
      expect(countContents(sample2)).toEqual(126);
    });

    it("answer", () => {
      expect(countContents(data)).toEqual(20189);
    });
  });
});
