const DIRECTIONS: any = {
  N: [0, -1],
  E: [1, 0],
  S: [0, 1],
  W: [-1, 0],
};

const move = ([x, y]: number[], [vx, vy]: number[], steps: number) => [
  x + steps * vx,
  y + steps * vy,
];

const rotate = ([x, y]: number[], degrees: number) => {
  // learning how to rotate around a point in a two dimensional plane
  // https://en.wikipedia.org/wiki/Rotation_(mathematics)

  const radians = (degrees * Math.PI) / 180;

  const xx = x * Math.cos(radians) - y * Math.sin(radians);
  const yy = x * Math.sin(radians) + y * Math.cos(radians);

  return [xx, yy].map(Math.round);
};

export const manhattanDistance = (
  data: string,
  update: "ship" | "waypoint",
  waypoint: number[]
) => {
  const route = data
    .split("\n")
    .map((x) => ({ action: x.substr(0, 1), value: Number(x.substr(1)) }));

  const pos = {
    ship: [0, 0],
    waypoint,
  };

  for (let step of route) {
    if (step.action === "R") {
      pos.waypoint = rotate(pos.waypoint, step.value);
    }

    if (step.action === "L") {
      pos.waypoint = rotate(pos.waypoint, step.value * -1);
    }

    if (step.action === "F") {
      pos.ship = move(pos.ship, pos.waypoint, step.value);
    }

    if (DIRECTIONS[step.action]) {
      pos[update] = move(pos[update], DIRECTIONS[step.action], step.value);
    }
  }

  return Math.abs(pos.ship[0]) + Math.abs(pos.ship[1]);
};
