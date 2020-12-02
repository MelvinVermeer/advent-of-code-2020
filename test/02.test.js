const {
  countValidPasswords,
  countValidPasswords2,
} = require("../src/02-password-philosophy");
const data = require("../data/02");

describe("02 - Password Philosophy", () => {
  const dataSample = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

  describe("Counts valid passwords", () => {
    it("Test case", () => {
      expect(countValidPasswords(dataSample)).toEqual(2);
    });

    it("Answer", () => {
      expect(countValidPasswords(data)).toEqual(542);
    });
  });

  describe("Counts valid passwords - different policy", () => {
    it("Test case", () => {
      expect(countValidPasswords2(dataSample)).toEqual(1);
    });

    it("Answer", () => {
      expect(countValidPasswords2(data)).toEqual(360);
    });
  });
});
