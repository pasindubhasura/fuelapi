//user router
const { login, register } = require("../controllers/user.cotroller");

const userRouter = require("express").Router();

userRouter.post("/login", login);
userRouter.post("/register", register);

module.exports = userRouter;