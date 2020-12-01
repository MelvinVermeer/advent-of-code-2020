// https://adventofcode.com/2020/day/1

const fixExpenseReportTwoEntries = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const numA = array[i];
      const numB = array[j];

      if (numA + numB === 2020) {
        return numA * numB;
      }
    }
  }
};

const fixExpenseReportThreeEntries = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        const numA = array[i];
        const numB = array[j];
        const numC = array[k];

        if (numA + numB + numC === 2020) {
          return numA * numB * numC;
        }
      }
    }
  }
};

module.exports = {
  fixExpenseReportTwoEntries,
  fixExpenseReportThreeEntries,
};
