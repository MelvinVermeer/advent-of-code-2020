import { countUnique, countUnanimous } from "../src/06-custom-customs";
import { data } from "../data/06";

const sample = `abc

a
b
c

ab
ac

a
a
a
a

b`;

describe("06 - Custom customs", () => {
  describe("sums unique answers per group", () => {
    it("Test cases", () => {
      expect(countUnique(sample)).toEqual(11);
    });

    it("Answer", () => {
      expect(countUnique(data)).toEqual(6335);
    });
  });

  describe("sums unanimous answers per group", () => {
    it("Test cases", () => {
      expect(countUnanimous(sample)).toEqual(6);
    });

    it("Answer", () => {
      expect(countUnanimous(data)).toEqual(3392);
    });
  });
});
