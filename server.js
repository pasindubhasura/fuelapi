const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const fuelStationRouter = require("./routers/fuelStation.router");
const queueRouter = require("./routers/queue.router");

const PORT = process.env.PORT || 5050;
const MONGO_URI = "mongodb+srv://admin:admin@cluster0.sz8scls.mongodb.net/FUEL_DB?retryWrites=true&w=majority";
const app = express();

app.use(cors()).use(express.json());

app.get("/", (req, res) => {
    res.send(`Server is working on PORT:${PORT}...`);
})
app.get("/test", (req, res) => {
    const users = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
    ];
    res.json(users);
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