import {
  Location,
  MOVE_DIRECTIONS,
  MOVE_TO_LOCATION_DIRECTION,
} from "../types/location";

export default class World {
  private _data: Location[];
  private _currentLocation: Location;

  constructor(data: Location[], currentLocation: Location) {
    this._data = data;
    this._currentLocation = currentLocation;
  }

  private findNextLocation(locationId: number | null) {
    return this._data.find(({ id }) => id === locationId);
  }

  public move(
    direction: MOVE_DIRECTIONS,
    displayUpdate: (newLocation: Location) => void
  ): void {
    const nextLocationID =
      this._currentLocation.directions[MOVE_TO_LOCATION_DIRECTION[direction]];

    const nextLocation = this.findNextLocation(nextLocationID);

    if (!nextLocation) return null;

    this._currentLocation = nextLocation;
    return displayUpdate(nextLocation);
  }
}
