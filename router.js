// import express from 'express';

// export const userRouter = express.Router();

// userRouter.use("/",(req,res)=>{
//     res.send("user home!");
// });
// userRouter.use("/edit",(req,res)=>{
//     res.send("user edit");
// });
// userRouter.use("/profile",(req,res)=>{
//     res.send("user profile");
// });
// userRouter.use("/password",(req,res)=>{
//     res.send("user password");
// });

import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));