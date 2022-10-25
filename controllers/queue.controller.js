const Queue = require("../models/queue.model");

exports.addVehicle = async (req, res) => {
    const { stationId } = req.params;
    const { vehiclesNo, fuelType, vehiclesType, arrivedTime } = req.body;

    try {
        const queue = await Queue.findOne({ _id: stationId });
        queue.vehicles.push({ vehiclesNo, fuelType, vehiclesType, arrivedTime });
        await queue.save();
        res.json({ isSuccessful: true, queue });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

exports.removeFromQueue = async (req, res) => {
    const { stationId, vehiclesNo } = req.params;

    try {
        const queue = await Queue.findOne({ _id: stationId });
        const VehiclesCopy = queue.vehicles;
        const filteredVehicles = VehiclesCopy.filter(vehicle => vehicle.vehiclesNo !== vehiclesNo);
        queue.vehicles = filteredVehicles;
        await queue.save();
        res.json({ isSuccessful: true, queue });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};