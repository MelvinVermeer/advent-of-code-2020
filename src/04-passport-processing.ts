// https://adventofcode.com/2020/day/3

import {
  isEyeColor,
  isHairColor,
  isPassportId,
  isValidHeight,
  isNumberBetween,
} from "../utils/04-passport";

const toPassport = (passport: string): object =>
  Object.fromEntries(passport.split(" ").map((x) => x.split(":")));

const dataToPassports = (data: string): object[] =>
  data
    .split("\n\n")
    .map((s) => s.replace(/\n/g, " "))
    .map(toPassport);

const fieldRules: {
  [key: string]: (value?: string) => boolean;
} = {
  byr: isNumberBetween(1920, 2002),
  iyr: isNumberBetween(2010, 2020),
  eyr: isNumberBetween(2020, 2030),
  hgt: isValidHeight,
  hcl: isHairColor,
  ecl: isEyeColor,
  pid: isPassportId,
};

const hasAllRequiredFields = (passport: any): boolean =>
  Object.keys(fieldRules).every((field) => field in passport);

const isMatchingAllFieldRequirements = (passport: any): boolean =>
  Object.keys(fieldRules).every((field) => fieldRules[field](passport[field]));

const validationRules: { [key: string]: (passport: any) => boolean } = {
  RequiredFields: hasAllRequiredFields,
  Rules: isMatchingAllFieldRequirements,
};

export const countValidPassports = (data: string, validationRule: string) =>
  dataToPassports(data).filter(validationRules[validationRule]).length;
