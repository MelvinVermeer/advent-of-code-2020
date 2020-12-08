import { data, sample } from "../data/08";
import { debugInfiniteLoop, fixInfiniteLoop } from "../src/08-handheld-halting";

describe("08", () => {
  describe("part 1", () => {
    it("test case ", () => {
      expect(debugInfiniteLoop(sample)).toEqual(5);
    });

    it("answer", () => {
      expect(debugInfiniteLoop(data)).toEqual(1331);
    });
  });

  describe("part 2", () => {
    it("test case ", () => {
      expect(fixInfiniteLoop(sample)).toEqual(8);
    });

    it("answer", () => {
      expect(fixInfiniteLoop(data)).toEqual(1121);
    });
  });
});
