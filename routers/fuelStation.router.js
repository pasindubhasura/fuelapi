//router for fuel station
const { getFuelData, updateFuelData, removeFuel, addFuelStation, searchFuelStations, getAllFuelStations } = require("../controllers/fuelStation.controller");

const fuelStationRouter = require("express").Router();

fuelStationRouter.get("/getAll", getAllFuelStations);
fuelStationRouter.get("/:stationId", getFuelData);
fuelStationRouter.put("/:stationId", updateFuelData);
fuelStationRouter.put("/reduceFuel/:stationId", removeFuel);
fuelStationRouter.post("/", addFuelStation);
fuelStationRouter.get("/search/:name", searchFuelStations);

module.exports = fuelStationRouter;