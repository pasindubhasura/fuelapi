const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
    const { uniqueIdentifier, password, userType } = req.body;
    console.log("user login...");
    console.log(uniqueIdentifier, password, userType);
    let user;

    try {
        if (userType === "VEHICLE_OWNER") {
            user = await User.findOne({ vehicleNumber: uniqueIdentifier });

        } else if (userType === "STATION_OWNER") {
            user = await User.findOne({ userName: uniqueIdentifier });
        }
        if (!user) {
            return res.json({ message: "User not found!", isSuccessful: false });
        }
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.json({ message: "Password is wrong!", isSuccessful: false });
        }
        //creating a JWT token 
        // const token = await jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "12h" });
        res.json({ isSuccessful: true, user: { id: user._id, userType: user.userType } });

    } catch (error) {
        res.json({ message: "Something went wrong!", isSuccessful: false });
    }
};

exports.register = async (req, res) => {
    const { userType, password, vehicleNumber, NIC, name, vehicleType, fuelType, chasisNumber, userName, stationName, registerNo } = req.body;
    console.log("user registering...");

    let user;
    const decryptedPassword = await bcrypt.hash(password, 10);

    try {
        if (userType === "VEHICLE_OWNER") {
            user = await User.create({ userType, password: decryptedPassword, vehicleNumber, NIC, name, vehicleType, fuelType, chasisNumber });

        } else if (userType === "STATION_OWNER") {
            user = await User.create({ userType, userName, stationName, registerNo, password: decryptedPassword, NIC, fuelType });
        }
        res.json({ isSuccessful: true, user: { id: user._id, userType: user.userType } });
    } catch (error) {
        res.json({ message: "Something went wrong!", isSuccessful: false });
    };
}