const isValidHeightCm = (x: string): boolean =>
  x.endsWith("cm") && isNumberBetween(150, 193)(x.replace("cm", ""));

const isValidHeightInch = (x: string): boolean =>
  x.endsWith("in") && isNumberBetween(59, 76)(x.replace("in", ""));

export const isValidHeight = (x?: string) =>
  !!x && (isValidHeightCm(x) || isValidHeightInch(x));

export const isHairColor = (x?: string) =>
  !!x && Boolean(x.match(/^#[0-9a-f]{6}$/));

export const isPassportId = (x?: string) =>
  x?.length === 9 && !isNaN(Number(x));

export const isEyeColor = (x?: string) =>
  !!x && ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(x);

export const isNumberBetween = (from: number, to: number) => (x?: string) =>
  !!x && Number(x) >= from && Number(x) <= to;
