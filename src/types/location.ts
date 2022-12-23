export enum MOVE_DIRECTIONS {
  UP = "w",
  DOWN = "s",
  LEFT = "a",
  RIGHT = "d",
}

export enum MOVE_TO_LOCATION_DIRECTION {
  w = "direction_up",
  s = "direction_down",
  a = "direction_left",
  d = "direction_right",
}

export type Directions = {
  direction_up: number | null;
  direction_right: number | null;
  direction_down: number | null;
  direction_left: number | null;
};

export type Location = {
  id: number;
  name: string;
  description: string;
  directions: Directions;
};
