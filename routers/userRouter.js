import express from "express";
import routes from "../routes.js";
import {
  users,
  editProfile,
  userDetail,
  changePassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get(routes.users, users);

userRouter.get(routes.editProfile, editProfile);

userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;