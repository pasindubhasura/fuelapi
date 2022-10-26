//model for queue
const mongoose = require("mongoose");

const queueSchema = mongoose.Schema({
    stationId: {
        type: String,
    },
    vehicles: [
        {
            vehiclesNo: String,
            fuelType: String,
            vehiclesType: String,
            arrivedTime: String,
            departedTime: String,

        }
    ]
});

const Queue = mongoose.model("queues", queueSchema);

module.exports = Queue;