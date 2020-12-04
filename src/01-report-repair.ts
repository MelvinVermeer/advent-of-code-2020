// https://adventofcode.com/2020/day/1

export const fixExpenseReportTwoEntries = (array: number[]): number => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const numA = array[i];
      const numB = array[j];

      if (numA + numB === 2020) {
        return numA * numB;
      }
    }
  }
  return 0;
};

export const fixExpenseReportThreeEntries = (array: number[]): number => {
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
  return 0;
};
