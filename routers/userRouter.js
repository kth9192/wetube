import express from 'express';
import routes from '../routes.js';
import {
  users,
  getEditProfile,
  userDetail,
  getChangePassword,
  postEditProfile,
  postChangePassword,
} from '../controllers/userController.js';
import { onlyPrivate, uploadAvatar } from '../middlwares.js';

const userRouter = express.Router();

userRouter.get(routes.users, users);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
