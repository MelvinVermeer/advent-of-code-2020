// https://adventofcode.com/2020/day/2

const isValid = (policyPassword) => {
  const [policy, password] = policyPassword.split(": ");
  const [minMax, char] = policy.split(" ");
  const [min, max] = minMax.split("-").map(Number);

  const occurrences = password.split("").filter((x) => x === char).length;

  return occurrences >= min && occurrences <= max;
};

const isValid2 = (policyPassword) => {
  const [policy, password] = policyPassword.split(": ");
  const [positions, char] = policy.split(" ");
  const [pos1, pos2] = positions.split("-").map(Number);

  const result = (password[pos1 - 1] === char) ^ (password[pos2 - 1] === char);

  return Boolean(result);
};

module.exports = {
  countValidPasswords: (lines) => lines.filter(isValid).length,
  countValidPasswords2: (lines) => lines.filter(isValid2).length,
};
