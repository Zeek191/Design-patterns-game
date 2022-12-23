import locationsData from "./data/locations.json" assert { type: "json" };
import Board from "./controllers/board";
import World from "./controllers/world";

const WorldControll = new World(locationsData, locationsData[0]);
const BoardControll = new Board(WorldControll);

BoardControll.init();
