//model for fuel station
const mongoose = require("mongoose");

const fuelStationSchema = mongoose.Schema({
    ownerId: {
        type: String,
    },
    name: {
        type: String,
    },
    registerNo: {
        type: String,
    },
    fuelDetails: [
        {
            fuelType: String,
            quantity: String,
        }
    ],
    arrivedTime: [
        {
            name: String,
            time: String,
        }
    ],
});

const FuelStation = mongoose.model("fuelStations", fuelStationSchema);

module.exports = FuelStation;