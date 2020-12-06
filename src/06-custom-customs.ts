const sum = (a: number, b: number) => a + b;

const uniqueAnswers = (data: string) => {
  const answers = data.replace(/\n/g, "").split("");
  return new Set(answers);
};

const countOccurrences = (substring: string, data: string) =>
  data.split("").filter((x) => x === substring).length;

const isUnanimous = (data: string, peopleInGroup: number) => (answer: string) =>
  countOccurrences(answer, data) === peopleInGroup;

const countUniqueInGroup = (data: string) => uniqueAnswers(data).size;

const countUnanimousInGroup = (data: string) => {
  const peopleInGroup = data.split("\n").length;

  return [...uniqueAnswers(data)].filter(isUnanimous(data, peopleInGroup))
    .length;
};

export const countUnique = (data: string) =>
  data.split("\n\n").map(countUniqueInGroup).reduce(sum);

export const countUnanimous = (data: string) =>
  data.split("\n\n").map(countUnanimousInGroup).reduce(sum);
