import express from 'express';
import routes from '../routes.js';
import { home, search } from '../controllers/videoController.js';
import {
  getJoin,
  logout,
  postJoin,
  getLogin,
  postLogin,
} from '../controllers/userController.js';
import { onlyPublic } from '../middlwares.js';

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPublic, logout);

export default globalRouter;
