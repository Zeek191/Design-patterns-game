import { Location, MOVE_DIRECTIONS } from "../types/location";
import { updateElementAnimation } from "../helpers/updateElementAnimation";
import { enumIncludesValue } from "../helpers/validators";
import World from "./world";

const NAME = document.querySelector("#name");
const DESCRIPTION = document.querySelector("#description");

export default class Board {
  world: World;

  constructor(world: World) {
    this.world = world;
  }

  private clearLocationBoard() {
    NAME.innerHTML = "";
    DESCRIPTION.innerHTML = "";
  }

  private updateLocationBoard(location: Location) {
    updateElementAnimation(NAME, location.name, 50);
    updateElementAnimation(DESCRIPTION, location.description, 25);
  }

  public init(): void {
    document?.addEventListener("keydown", (e) => {
      if (!enumIncludesValue(MOVE_DIRECTIONS, e.key)) return null;
      this.clearLocationBoard();

      return this.world.move(
        e.key as MOVE_DIRECTIONS,
        this.updateLocationBoard
      );
    });
  }
}
