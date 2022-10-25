const { addVehicle, removeFromQueue, createQueue } = require("../controllers/queue.controller");

const queueRouter = require("express").Router();

queueRouter.post("/:stationId", createQueue);
queueRouter.put("/:stationId", addVehicle);
queueRouter.delete("/:stationId/:vehiclesNo", removeFromQueue);

module.exports = queueRouter;