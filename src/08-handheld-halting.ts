const getValue = (instruction: string) => Number(instruction.split(" ")[1]);

const runProgram = (instructions: string[]) => {
  const visited: number[] = [];
  let acc = 0;
  let i = 0;

  while (!visited.includes(i)) {
    visited.push(i);

    const instruction = instructions[i];

    if (instruction.startsWith("nop")) {
      i++;
    }

    if (instruction.startsWith("acc")) {
      acc += getValue(instruction);
      i++;
    }

    if (instruction.startsWith("jmp")) {
      i += getValue(instruction);
    }

    if (i >= instructions.length) {
      return acc;
    }
  }

  throw acc; // we hit an infinite loop
};

const flipNopJmp = (instructions: string[], i: number) => {
  const copy = [...instructions];
  copy[i] = copy[i].replace("nop", "jmp").replace("jmp", "nop");
  return copy;
};

export const debugInfiniteLoop = (data: string) => {
  const instructions = data.split("\n");
  try {
    runProgram(instructions);
  } catch (error) {
    return error;
  }
};

export const fixInfiniteLoop = (data: string) => {
  const instructions = data.split("\n");
  let i = instructions.length;

  while (i--) {
    try {
      const fixed = flipNopJmp(instructions, i);
      return runProgram(fixed);
    } catch {}
  }

  return 0;
};
