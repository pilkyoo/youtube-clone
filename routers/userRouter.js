import express from 'express';
import { changePassword, editProfile, userDetail, users } from '../controllers/userController';
import routes from "../routes";

const userRouter = express.Router();

export default userRouter;

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);