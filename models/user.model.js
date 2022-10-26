//user model
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    password: {
        type: String,
    },
    vehicleNumber: {
        type: String,
        default: null,
    },
    NIC: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: null,
    },
    vehicleType: {
        type: String,
        default: null,
    },
    fuelType: {
        type: String,
        default: null,
    },
    chasisNumber: {
        type: String,
        default: null,
    },
    userName: {
        type: String,
        default: null,
    },
    stationName: {
        type: String,
        default: null,
    },
    registerNo: {
        type: String,
        default: null,
    },
    userType: {
        type: String,
        default: "VEHICLE_OWNER"
    }
});

const User = mongoose.model("users", userSchema);

module.exports = User;