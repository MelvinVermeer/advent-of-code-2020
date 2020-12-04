import {
  fixExpenseReportThreeEntries,
  fixExpenseReportTwoEntries,
} from "../src/01-report-repair";
import { data } from "../data/01";

describe("01 - Report Repair", () => {
  describe("fix two entries", () => {
    it("Test case", () => {
      const report = [1721, 979, 366, 299, 675, 1456];
      expect(fixExpenseReportTwoEntries(report)).toEqual(514579);
    });

    it("Answer", () => {
      expect(fixExpenseReportTwoEntries(data)).toEqual(926464);
    });
  });

  describe("fix three entries", () => {
    it("Test case", () => {
      const report = [1721, 979, 366, 299, 675, 1456];
      expect(fixExpenseReportThreeEntries(report)).toEqual(241861950);
    });

    it("Answer", () => {
      expect(fixExpenseReportThreeEntries(data)).toEqual(65656536);
    });
  });
});
