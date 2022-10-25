const { addVehicle, removeFromQueue } = require("../controllers/queue.controller");

const queueRouter = require("express").Router();

queueRouter.post("/", addVehicle);
queueRouter.delete("/:stationId/:vehiclesNo", removeFromQueue);

module.exports = queueRouter;