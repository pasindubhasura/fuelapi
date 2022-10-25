const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const fuelStationRouter = require("./routers/fuelStation.router");
const queueRouter = require("./routers/queue.router");

const PORT = 5050;
const MONGO_URI = "mongodb+srv://admin:admin@cluster0.sz8scls.mongodb.net/FUEL_DB?retryWrites=true&w=majority";
const app = express();

app.use(cors()).use(express.json());

app.get("/", (req, res) => {
    res.send(`Server is working on PORT:${PORT}...`);
})
app.use("/users", userRouter);
app.use("/fuelStations", fuelStationRouter);
app.use("/queues", queueRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT:${PORT}...🔥`);
    mongoose.connect(MONGO_URI, err => {
        if (err) return console.error(err.message);
        console.log("MongoDB connection established...😍⚡");
    });
});