import express from 'express';
import routes from '../routes.js';
import {
  users,
  editProfile,
  userDetail,
  changePassword,
} from '../controllers/userController.js';
import { onlyPrivate } from '../middlwares.js';

const userRouter = express.Router();

userRouter.get(routes.users, users);

userRouter.get(routes.editProfile, onlyPrivate, editProfile);

userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;
