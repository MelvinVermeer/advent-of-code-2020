import {
  getSeatId,
  getHighestSeatId,
  getMySeatId,
} from "../src/05-binary-boarding";
import { data } from "../data/05";

describe("05 - Binary Boarding", () => {
  describe("Get seat id", () => {
    it("Test cases", () => {
      expect(getSeatId("FBFBBFFRLR")).toEqual(357);
      expect(getSeatId("BFFFBBFRRR")).toEqual(567);
      expect(getSeatId("FFFBBBFRRR")).toEqual(119);
      expect(getSeatId("BBFFBBFRLL")).toEqual(820);
    });

    it("Returns highest SeatId", () => {
      expect(
        getHighestSeatId("FBFBBFFRLR\nBBFFBBFRLL\nBFFFBBFRRR\nFFFBBBFRRR")
      ).toEqual(820);
    });

    it("Answer", () => {
      expect(getHighestSeatId(data)).toEqual(953);
    });
  });

  describe("Find my seat", () => {
    it("Returns the missing seat id", () => {
      expect(getMySeatId(data)).toEqual(615);
    });
  });
});
