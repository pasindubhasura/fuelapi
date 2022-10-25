const { login } = require("../controllers/user.cotroller");

const userRouter = require("express").Router();

userRouter.post("/login", login);

module.exports = userRouter;