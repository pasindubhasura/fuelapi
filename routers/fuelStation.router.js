const { getFuelData, updateFuelData, removeFuel, addFuelStation, searchFuelStations } = require("../controllers/fuelStation.controller");

const fuelStationRouter = require("express").Router();

fuelStationRouter.get("/:stationId", getFuelData);
fuelStationRouter.put("/:stationId", updateFuelData);
fuelStationRouter.delete("/:stationId", removeFuel);
fuelStationRouter.post("/:stationId", addFuelStation);
fuelStationRouter.get("/search/:name", searchFuelStations);

module.exports = fuelStationRouter;