//router for fuel station
const { getFuelData, updateFuelData, removeFuel, addFuelStation, searchFuelStations, getAllFuelStations, getOwnerFuelStation } = require("../controllers/fuelStation.controller");

const fuelStationRouter = require("express").Router();

fuelStationRouter.get("/getAll", getAllFuelStations);
fuelStationRouter.get("/:stationId", getFuelData);
fuelStationRouter.put("/:stationId", updateFuelData);
fuelStationRouter.put("/reduceFuel/:stationId", removeFuel);
fuelStationRouter.post("/", addFuelStation);
fuelStationRouter.get("/search/:name", searchFuelStations);
fuelStationRouter.get("/owner/:ownerId", getOwnerFuelStation);

module.exports = fuelStationRouter;