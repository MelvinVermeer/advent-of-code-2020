const sum = (x: number, y: number) => x + y;

const containsSum = (array: number[], control: number): boolean => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === control) {
        return true;
      }
    }
  }

  return false;
};

const findNumbersThatSum = (array: number[], number: number) => {
  let subSetSize = 1;
  let i = 0;
  while (i < array.length) {
    let subSet = [...array].slice(i, i + subSetSize);
    const subSetSum = subSet.reduce(sum);

    if (subSetSum === number) {
      return subSet;
    }

    if (subSetSum < number) {
      subSetSize++;
    }
    if (subSetSum > number) {
      subSetSize = 1;
      i++;
    }
  }

  throw new Error(`No contiguous set found that sums to ${number}`);
};

export const findWeakNumber = (data: string, preambleSize: number) => {
  const output = data.split("\n").map(Number);

  for (let i = preambleSize; i < output.length; i++) {
    const previousSet = [...output].slice(i - preambleSize, i);

    if (!containsSum(previousSet, output[i])) {
      return output[i];
    }
  }

  throw new Error(`No weak number found`);
};

export const findWeakSet = (data: string, preambleSize: number) => {
  const output = data.split("\n").map(Number);
  const weakNumber = findWeakNumber(data, preambleSize);

  const set = findNumbersThatSum(output, weakNumber);
  set.sort((a, b) => a - b);

  return set[0] + set[set.length - 1];
};
