// https://adventofcode.com/2020/day/2

const isValid = (policyPassword: string) => {
  const [policy, password] = policyPassword.split(": ");
  const [minMax, char] = policy.split(" ");
  const [min, max] = minMax.split("-").map(Number);

  const occurrences = password.split("").filter((x) => x === char).length;

  return occurrences >= min && occurrences <= max;
};

const isValid2 = (policyPassword: string) => {
  const [policy, password] = policyPassword.split(": ");
  const [positions, char] = policy.split(" ");
  const [pos1, pos2] = positions.split("-").map(Number);

  const result =
    (password[pos1 - 1] === char) !== (password[pos2 - 1] === char);

  return result;
};

export const countValidPasswords = (lines: string[]) =>
  lines.filter(isValid).length;

export const countValidPasswords2 = (lines: string[]) =>
  lines.filter(isValid2).length;
