//FuelStation controller

const FuelStation = require("../models/fuelStation.model");

//get fuel data for a station
exports.getFuelData = async (req, res) => {
    const { stationId } = req.params;

    try {
        const fuelStations = await FuelStation.findById(stationId);
        res.json({ isSuccessful: true, fuelStations });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

//update fuel data
exports.updateFuelData = async (req, res) => {
    const { stationId } = req.params;
    let { fuelDetails, arrivedTime } = req.body;
    fuelDetails = JSON.parse(fuelDetails);


    try {
        const fuelStation = await FuelStation.findById(stationId);
        fuelStation.fuelDetails = fuelDetails;
        fuelStation.arrivedTime = arrivedTime;

        await fuelStation.save();
        res.json({ isSuccessful: true, fuelStation });
    } catch (error) {
        console.log("update error... " + error);
        res.json({ isSuccessful: false });
    }
};

//remove fuels from fuel station
exports.removeFuel = async (req, res) => {
    const { stationId } = req.params;
    const { fuelType, quantity } = req.body;

    try {

        const ft = await FuelStation.findOne({
            _id: stationId

        })

        const fd = ft.fuelDetails.filter(i => {
            return i.fuelType === fuelType
        })

        await FuelStation.findOneAndUpdate(
            { _id: stationId },
            {
                $set: {
                    "fuelDetails.$[el].quantity": fd[0].quantity - quantity,
                },
            },
            {
                arrayFilters: [{ "el.fuelType": fuelType }],
                new: true,
            }
        );

        res.status(200).json({ isSuccessful: true });
    } catch (error) {
        console.log("reduce error...", error);
        res.json({ isSuccessful: false });
    }
};

//add a fuel station
exports.addFuelStation = async (req, res) => {
    const { ownerId, name, registerNo } = req.body;

    const fuelDetails = [
        {
            fuelType: "Diesel",
            quantity: "0",
        },
        {
            fuelType: "Super diesel",
            quantity: "0",
        },
        {
            fuelType: "Petrol 92",
            quantity: "0",
        },
        {
            fuelType: "Petrol 95",
            quantity: "0",
        }
    ]
    try {
        const fuelStation = await FuelStation.create({ ownerId, name, registerNo, fuelDetails });
        res.json({ isSuccessful: true, fuelStation });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

//search fuel station
exports.searchFuelStations = async (req, res) => {
    const { name } = req.params;

    try {
        const fuelStation = await FuelStation.find({ name });
        res.json({ isSuccessful: true, fuelStation });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

//get all fuel stations
exports.getAllFuelStations = async (req, res) => {

    try {
        const fuelStations = await FuelStation.find({});
        res.json({ isSuccessful: true, fuelStations });
    } catch (error) {
        res.json({ isSuccessful: false });
    }
};

//get one station
exports.getOwnerFuelStation = async (req, res) => {
    const { ownerId } = req.params;

    try {
        const fuelStation = await FuelStation.find({ ownerId });
        res.json({ isSuccessful: true, fuelStation });

    } catch (error) {
        res.json({ isSuccessful: false });
    }
}