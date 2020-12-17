import { sample, data } from "../data/17";
import { countActive } from "../src/17-conway-cubes";

describe("17 - Rain Risk", () => {
  describe("p1", () => {
    it("test", () => {
      expect(countActive(sample)).toEqual(112);
    });
    it("answer", () => {
      expect(countActive(data)).toEqual(304);
    });
  });

  describe("p2", () => {
  //
  });
});
