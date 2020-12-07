import { Rule, toTypedRules } from "../utils/07-parser";

const sum = (x: number, y: number) => x + y;

const canHoldShinyGold = (bagColor: string, rules: Rule[]): boolean => {
  const rule = rules.find(({ color }) => color === bagColor)!;

  return rule.contains.some(
    ({ color }) => color === "shiny gold" || canHoldShinyGold(color, rules)
  );
};

const bagsInside = (bagColor: string, rules: Rule[]): number => {
  const rule = rules.find(({ color }) => color === bagColor)!;

  return rule.contains
    .map(({ amount, color }) => amount + amount * bagsInside(color, rules))
    .reduce(sum, 0);
};

export const count = (data: string) => {
  const rules = toTypedRules(data);
  return rules.filter(({ color }) => canHoldShinyGold(color, rules)).length;
};

export const countContents = (data: string) =>
  bagsInside("shiny gold", toTypedRules(data));
