import express from 'express';

const userRouter = express.Router();

export default userRouter;

userRouter.get("/", (req,res)=>res.send("this is user home"));
userRouter.get("/edit", (req,res)=>res.send("this is user edit"));
userRouter.get("/profile", (req,res)=>res.send("this is user profile"));