export type Rule = {
  color: string;
  contains: {
    amount: number;
    color: string;
  }[];
};

const getContains = (rule: string) => {
  if (rule.includes("no other bags")) {
    return [];
  }

  return rule
    .split("contain")[1]!
    .split(",")
    .map((x) =>
      x.replace(/bags/g, "").replace(/bag/g, "").replace(/\./g, "").trim()
    )
    .map((x) => ({
      amount: Number(x.substr(0, x.indexOf(" ") + 1)),
      color: x.substr(x.indexOf(" ")).trim(),
    }));
};

const toTypedRule = (rule: string): Rule => ({
  color: rule.split(" bags ")[0],
  contains: getContains(rule),
});

export const toTypedRules = (data: string) => data.split("\n").map(toTypedRule);
