const FuelStation = require("../models/fuelStation.model");

exports.getFuelData = async (req, res) => {
    const { stationId } = req.params;

    try {
        const fuelStations = await FuelStation.findById(stationId);
        res.json({ isSuccessful: true, fuelStations });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

exports.updateFuelData = async (req, res) => {
    const { stationId } = req.params;
    const { fuelDetails, arrivedTime } = req.body;

    try {
        const fuelStation = await FuelStation.findOne(stationId);
        fuelStation.fuelDetails = fuelDetails;
        fuelStation.arrivedTime = arrivedTime;

        await fuelStation.save();
        res.json({ isSuccessful: true, fuelStation });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

exports.removeFuel = async (req, res) => {
    const { stationId } = req.params;
    const { fuelType, quantity } = req.body;

    try {
        await FuelStation.updateOne({ _id: stationId, "fuelDetails.fuelType": fuelType }, {
            $set: { "fuelDetails.$.quantity": fuelDetails.quantity - quantity },
        })
        res.json({ isSuccessful: true });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

exports.addFuelStation = async (req, res) => {
    const { ownerId, name, registerNo } = req.body;

    try {
        const fuelStation = await FuelStation.create({ ownerId, name, registerNo });
        res.json({ isSuccessful: true, fuelStation });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

exports.searchFuelStations = async (req, res) => {
    const { name } = req.params;

    try {
        const fuelStation = await FuelStation.find({ name });
        res.json({ isSuccessful: true, fuelStation });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};