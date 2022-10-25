const { addVehicle } = require("../controllers/queue.controller");

const queueRouter = require("express").Router();

queueRouter.post("/", addVehicle);

module.exports = queueRouter;